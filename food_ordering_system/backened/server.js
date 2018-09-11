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

//Home
app.get('/',check,(req,res)=>{
    res.redirect('http://localhost:3000/Login')
})
//Login
app.post('/login',(req,res)=>{
    const email=req.body.email
    user_model.findOne({email},{password:true}).then(user=>{
        if(bcrypt.compareSync(req.body.password,user.password)){
            req.session.user=user
            res.status(200).redirect('http://localhost:3000/index')
        }
        else
            res.redirect('http://localhost:3000/Login')
    }).catch(err=>{res.status(400).redirect('http://localhost:3000/Login')})
})

//User Register//
app.post('/register',(req,res)=>{
    const db=new user_model
    db.email=req.body.email
    db.password=bcrypt.hashSync(req.body.password,10)
    db.save().then(user=>{
        req.session.user=user
        console.log(req.session.user)
        res.status(200).redirect('http://localhost:3000/index')})
        .catch(err=>{res.status(400).redirect('http://localhost:3000/Register')})
})

//logout//
app.post('/logout',(req,res)=>{
    if(req.session.user)
        res.clearCookie("user_sid").status(200).redirect('/')
    else
        res.redirect('/')
})
app.listen(process.env.PORT||3002)