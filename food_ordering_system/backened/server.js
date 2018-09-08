const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const session=require('express-session')


const app=express()

app.use(session({key:'suab',
                secret:'suab',
            cookie:{maxAge:null}}))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.Promise=global.Promise
mongoose.connect('mongodb://127.0.0.1/food_db')
const user=new mongoose.Schema({email:{type:String,unique:true,required:true},password:{type:String,required:true},
    order:[{food:String,add:Boolean,price:Number,date:Date}]})
const user_model=mongoose.model('user',user)

//User LoginIn//
app.post('/login',(req,res)=>{
    const db=new user_model
    db.email=req.body.email
    const hash=bcrypt.hashSync(req.body.password,10)
    db.password=hash
    db.save().then(user=>{
        req.session.user=user
        res.status(200).json(user)}).catch(err=>{res.status(400).json(err)})
})

//Food ordering//
app.put('/order/:email',(req,res)=>{
    user_model.update({email:req.params.email},{$addToSet:{'order':{'food':req.body.food,'add':req.body.add,
        'price':req.body.price,'date':Date.now()}}})
    .then(user=>{res.status(200).json(user)})
    .catch(err=>res.status(400).json(err))
})
app.listen(process.env.PORT||3000)