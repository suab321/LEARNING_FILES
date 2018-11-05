const mongoose=require('mongoose');

mongoose.Promise=global.Promise

const mongourl="mongodb://127.0.0.1/social_site";
mongoose.connect(mongourl).catch(err=>console.log(err))

const google_schema=new mongoose.Schema({user:String,googleid:String})
const g_model=mongoose.model("google_user_table",google_schema);

module.exports={
    google_model:g_model
}