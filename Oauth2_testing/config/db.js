const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1/testdb')
mongoose.Promise=global.Promise
const user=new mongoose.Schema({user:String,id:String})
const user_model=mongoose.model('OAuth2.0',user)

module.exports=user_model
