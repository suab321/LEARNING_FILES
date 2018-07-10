const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const bcrypt=require('bcrypt');
const knex=require('knex');
const db=knex({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'postgres',
		password:'9051',
		database:'facerecog_db'

	}

});

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.get('/',(req,res)=>{res.json("It is working")

})


app.post('/signin',(req,res)=>{
	const{email,password}=req.body;
	db.select('*').from('users').where({email,password}).then(response=>{
		if(response.length===0)
			res.status(400).json("not registered");
		else
			res.status(200).json(response[0]);
		}).catch(err=>res.status(500).json("cant"))

})



app.post('/register',(req,res)=>{
	const {name,email,password}=req.body;
	db('users').returning('*').insert({
		name:name,
		email:email,
		password:password,
		joined:new Date()
	}).then(response=>res.json(response[0]))
	.catch(err=>res.status(400).json("unable to register"));
		
	})
	

app.put('/image',(req,res)=>{
	let {id}=req.body;
	db('users').where('id', '=', id).increment('entries', 1).returning('entries').then(users=>res.json(users[0]))
})

app.get('/profile/:id',(req,res)=>{
	const{id}=req.params;
	db.select('*').from('users').where({id}).then(response=>res.status(200).json(response[0]))
	.catch(err=>res.status(400).json("users does not exist"));
})

app.listen(process.env.PORT||3000);