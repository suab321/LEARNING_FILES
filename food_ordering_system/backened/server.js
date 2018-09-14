const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const session=require('express-session')
const {user_model}=require('./database/data_base')
const {food_model}=require('./database/data_base')
const orders=require('./routes/order')
const cors=require('cors')
const cookieparser=require('cookie-parser')


const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000','http://localhost:3000/Login');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", 'true')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });
app.use(cookieparser())
app.use(cors({
    Credentials:true,
    origin: ['http://localhost:3000','http://localhost:3000/Login'],
    methods:['GET','POST','PUT'],
    headers:true
}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials","true")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });
app.use(session({key:'user_sid',
                secret:'suab',
                resave:true,
	            saveUninitialized:true,
            cookie:{maxAge:null}}))

const check=(req,res,next)=>{
    if(req.session.user&&req.cookies.user_sid)
        res.redirect('http://localhost:3000/index')
    else
        next()
}
//Cart urls
app.use('/cart',orders);
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/cookie',(req,res)=>{
    if(req.session.user && req.cookies.user_sid){
        res.json(req.session.user.email)
    }
})
//Home
app.get('/',check,(req,res)=>{
    res.redirect('http://localhost:3000/Login')
})
//Login
app.get('/get_login',(req,res)=>{res.status(200).redirect('http://localhost:3000/Login')})

app.post('/login',(req,res)=>{
    const email=req.body.email
    user_model.findOne({email},{email:true,password:true}).then(user=>{
        if(bcrypt.compareSync(req.body.password,user.password)){
            req.session.user=user
            res.status(200).redirect('/')
        }
        else
            res.redirect('http://localhost:3000/Login')
    }).catch(err=>{res.status(400).redirect('http://localhost:3000/Login')})
})

//User Register//
app.post('/register',(req,res)=>{
    const db=new user_model
    db.email=req.body.email
    db.password=bcrypt.hashSync(req.body.password||req.body.cpassword,10)
    db.save().then(user=>{
        req.session.user=user
        res.status(200).redirect('http://localhost:3000/index')})
        .catch(err=>{res.status(400).redirect('http://localhost:3000/Register')})
})

//logout//
app.get('/logout',(req,res)=>{
    if(req.session.user && req.cookies.user_sid)
       res.clearCookie('user_sid').json('ok')
})

//Loading food
app.post('/load_food',(req,res)=>{
    const db=new food_model
    db.name=req.body.name
    db.price=req.body.price
    db.category=req.body.cat
    db.url=req.body.url
    db.type=req.body.type
    db.gene=req.body.gene
    db.save().then(user=>{res.status(200).json(user)}).catch(err=>res.status(500).json(err))
})
//getting food_item
app.get('/food',(req,res)=>{
    food_model.find({}).then(user=>{res.status(200).json(user)}).catch(err=>res.json(err))
})

app.listen(process.env.PORT||3002)