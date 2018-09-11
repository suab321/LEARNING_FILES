const express=require('express')
const bodyparser=require('body-parser');
const session=require('express-session');
const cookieparser=require('cookie-parser')
const mongoose=require('mongoose')
const route=require('express-router');

mongoose.Promise=global.Promise
const app=express()
let router=express.Router();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.connect('mongodb://127.0.0.1/testdb')
var user=new mongoose.Schema({
	user:{type:String,required:true,unique:true},
	pass:{type:String,required:true}
})
var model=mongoose.model('model',user);
app.use(session({
	key:'user_sid',
	secret:'abhi',
	resave:true,
	saveUninitialized:true,
	cookie:{maxAge:600000}
}))
app.use(router)
app.use(cookieparser());

let session_checker=(req,res,next)=>{
	if(req.session.user&&req.cookies.user_sid)
		res.status(200).json('dashboard')
	else
		next()
}


app.get('/',session_checker,(req,res)=>{
	res.status(200).json('/login')
})
app.route('/login')
.get(session_checker,(req,res)=>{res.status(200).json('login page')
})
.post((req,res)=>{
	const name=req.body.user;
	model.findOne({user:name},{user:true,pass:true}).then((user)=>{
		if(user.pass===req.body.pass){
			req.session.user=user.user
			console.log(req.session)
			console.log(req.cookies)
			res.status(200).json('/dashboard')
		}
		else
			res.status(500).json('err')
	})
})
app.route('/signin')
.get(session_checker,(req,res)=>{
	res.status(200).json('signin')
})
.post((req,res)=>{
	var a =new model(req.body)
	a.save().then(user=>{
		req.session.user=user.user;
		res.status(200).json('/dashboard')
	})
})
app.get('/dashboard',session_checker,(req,res)=>{
	if(req.session.user&&req.cookies.user_sid)
		res.status(200).json('dashboard')
	else
		res.status(500).json('not')
})
app.get('/logout',(req,res)=>{
	if(req.session.user&&req.cookies.user_sid){
		res.clearCookie('user_sid').status(200).json("loggedOut")
	}
	else
		res.status(500).json('not logged in')

})
app.listen(3000)
