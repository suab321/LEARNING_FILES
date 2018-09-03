const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.connect('mongodb://127.0.0.1/testdb')
mongoose.Promise=global.Promise

const user_model=new mongoose.Schema({name:String,Gender:String,date:Date,_id:mongoose.Schema.Types.ObjectId})
const comment_model=new mongoose.Schema({comment:String,postedby:{type:mongoose.Schema.Types.ObjectId,ref:'user_advanced'}})

const user_advanced=mongoose.model('user_advanced',user_model)
const comment_advanced=mongoose.model('comment_advanced',comment_model)

const new_user=new user_advanced()
	new_user.name="abhinav"
	new_user.Gender="male"
	new_user._id= new mongoose.Types.ObjectId()
	new_user.save()
const new_comment=new comment_advanced()
	new_comment.comment="Hey nice pic"
	new_comment.postedby=new_user._id
	new_comment.save()

comment_advanced.findOne({comment:'Hey nice pic'}).populate('postedby').exec(),(err,user)=>{
	if(err)
		console.log(err)
	else
		console.log(user.postedby.name)
}
app.listen(3000)