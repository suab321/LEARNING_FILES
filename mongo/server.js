const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const ejs=require('ejs');
const mongo=require('mongodb').MongoClient;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1/test1');
var format=new mongoose.Schema({
	name:{type:String,required:true},
	Password:String,
	joined:{type:Date,default:Date.now()}
})
var model=mongoose.model('user',format);
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.post('/submit',(req,res)=>{
	let user=new model(req.body);
	user.save(err=>{if(err)
		res.status(500).json(err)
	})
	.then(res.status(200).json('saved'))
})

app.get('/get',(req,res)=>{
	model.find((err,user)=>{
		if(err)
			res.status(500).json(err)
		res.status(200).json(user);
	})
})

app.get('/get_filter',(req,res)=>{
	model.find({name:'abhinav',Password:9051},(err,user)=>{
		if(err)
			res.status(500).json(err)
		res.status(200).json(person)
	})
})

app.get('/select_data',(req,res)=>{
	model.find({name:'abhinav'},{joined:true},(err,user)=>{
		if(err)
			res.status(500).json(err)
		res.status(200).json(user)
	})
})

app.get('/update',(req,res)=>{
	model.findOneAndUpdate({name:'abhinav'},{Password:'9051571833'},(err,user)=>{
		if(err)
			res.status(500).json(err)
		res.status(200).json(user)
	})
})

/*To Update mulitple documents*/
app.get('/update_all',(req,res)=>{
	model.update({name:'abhinav'},{Password:'9051571833'},{multi:true},(err,user)=>{
		if(err)
			res.status(500).json(err)
		res.status(200).json(user)
	})
})

app.listen(3000);