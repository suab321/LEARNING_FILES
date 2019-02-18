const url="mongodb://127.0.0.1/otp_testing";

const mongoose=require('mongoose');
mongoose.connect(url).catch(err=>console.log(err));

const userschema=new mongoose.Schema({
    phone:{type:String},
    name:{type:String}
})
const verifieduserschema=new mongoose.Schema({
    phone:{type:String},
    name:{type:String}
})
const usermodel=mongoose.model('usertabble',userschema);
const verifiedmodel=mongoose.model('verifiedmodel',verifieduserschema);

module.exports={
    usermodel,
    verifiedmodel
}