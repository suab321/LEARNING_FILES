const express=require('express')
const mongoose=require('mongoose')
mongoose.Promise=global.Promise
mongoose.connect("mongodb://127.0.0.1/testdb")
const app=express()
const book=new mongoose.Schema({
    name:String,
    author:String
})
const user=new mongoose.Schema({
    name:{type:String},
    books:[{name:String,author:String}]
})
const user_model=mongoose.model("user",user)

user_model.findOneAndUpdate({name:"Abhinav"},
        {$addToSet:{"books":{"name":"abhinav","author":"ahdh"}}}).then(usr=>console.log(usr))
        .catch(err=>console.log(err))
app.listen(3002);