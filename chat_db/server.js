const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testdb')
mongoose.Promise=global.Promise
const app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())



const User=new mongoose.Schema({user_name:String,user_friend:[{friend_name:String,chat:[String]}]})
const user=mongoose.model('user_table',User)




app.post('/add_user',(req,res)=>{
	const db=new user
	db.user_name=req.body.name
	db.save(err=>{
		if(err)
			res.status(200).json(err)
		else
			res.status(200).json("success")

})
})
app.post('/add_friends/:name',(req,res)=>{
	const{name}=req.params
	user.findOneAndUpdate({user_name:name},{$addToSet:{'user_friend':{friend_name:req.body.friend}},$push:{'chat':req.body.chat}},(err,usr)=>{
		if(err)
			res.status(500).json(err)
		else
			res.status(200).json(usr)
	})
})


app.listen(3000)
