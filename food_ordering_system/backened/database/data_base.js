const mongoose=require('mongoose')


mongoose.Promise=global.Promise
mongoose.connect('mongodb://127.0.0.1/food_db')
const user=new mongoose.Schema({email:{type:String,unique:true,required:true},password:{type:String,required:true},
    order:[{name:String,price:Number,date:Date,category:String}]})
const user_model=mongoose.model('user',user)
const foods=new mongoose.Schema({name:String,price:Number,category:String,url:String,type:String,gene:String})
const food_model=mongoose.model('food_model',foods)

module.exports={user_model,food_model}