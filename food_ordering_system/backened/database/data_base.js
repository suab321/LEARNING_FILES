const mongoose=require('mongoose')


mongoose.Promise=global.Promise
mongoose.connect('mongodb://127.0.0.1/fooddb'
,{ useNewUrlParser: true }).catch(err=>console.log(err))
const user=new mongoose.Schema({email:{type:String,unique:true,required:true},password:{type:String,required:true},
    cart:[{name:String,price:Number,date:Date,category:String,url:String}],
    order_placed:[{orders:{name:String,price:String,Number:String,date:Date,category:String,url:String},date:Date}]})
const user_model=mongoose.model('user',user)
const foods=new mongoose.Schema({name:String,price:Number,category:String,url:String,type:String,gene:String})
const food_model=mongoose.model('food_model',foods)

module.exports={user_model,food_model}