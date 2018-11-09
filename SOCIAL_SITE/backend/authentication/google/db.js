const mongoose=require('mongoose');

mongoose.Promise=global.Promise

const mongourl="mongodb://127.0.0.1/social_site";
mongoose.connect(mongourl).catch(err=>console.log(err))

const google_schema=new mongoose.Schema({user:String,googleid:String})
const g_model=mongoose.model("google_user_table",google_schema);

const temp_login_schema=new mongoose.Schema({email:{type:String,unique:true},password:String,name:{type:String,required:true}})
const temp_login_model=mongoose.model("temp_login_via_email",temp_login_schema);

const perma_login_schema=new mongoose.Schema({email:{type:String,unique:true},password:String,name:{type:String,required:true}})
const perma_login_model=mongoose.model("perma_login_via_email",perma_login_schema);

const user_reg_in_schema=new mongoose.Schema({name:String})
const user_reg_in_model=mongoose.model("user present in website",user_reg_in_schema);

module.exports={
    perma_login_model,
    temp_login_model,
    google_model:g_model,
    user_reg_in_model
}