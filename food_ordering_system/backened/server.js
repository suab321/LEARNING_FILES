const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const session=require('express-session')
const user_model=require('./database/data_base')
const orders=require('./routes/order')


const app=express()

app.use(session({key:'user_sid',
                secret:'suab',
            cookie:{maxAge:null}}))

const check=(req,res,next)=>{
    if(req.session.user)
    res.redirect('http://localhost:3000/index')
    else
        next()
}
app.use('/cart',orders);
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.get('/',check,(req,res)=>{
    res.redirect('http://localhost:3000/Login')
})

app.get('/login',(req,res)=>{
    const email=req.body.email
    user_model.findOne({email},{password:true}).then(user=>{
        if(bcrypt.compareSync(req.body.pass,user.password)){
            req.session.user=user
            res.status(200).redirect('http://localhost:3000/index')
        }
        else
            res.redirect('http://localhost:3000/Login')
    }).catch(err=>{res.redirect('http://localhost:3000/Login')})
})

//User Register//
app.post('/register',(req,res)=>{
    const db=new user_model
    db.email=req.body.email
    const hash=bcrypt.hashSync(req.body.password,10)
    db.password=hash
    db.save().then(user=>{
        req.session.user=user
        console.log(req.session.user)
        res.status(200).redirect('http://localhost:3000/index')}).catch(err=>{res.status(400).redirect('http://localhost:3000/Register')})
})

//Food ordering//
app.put('/order/:email',(req,res)=>{
    user_model.update({email:req.params.email},{$addToSet:{'order':{'food':req.body.food,'add':req.body.add,
        'price':req.body.price,'date':Date.now()}}})
    .then(user=>{res.status(200).json(user)})
    .catch(err=>res.status(400).json(err))
})

//logout//
app.get('/logout',(req,res)=>{
    if(req.session.user)
        res.clearCookie("user_sid").status(200).json('loggedOut')
})
app.listen(process.env.PORT||3001)