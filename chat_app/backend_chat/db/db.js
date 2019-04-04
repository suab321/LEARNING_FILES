const mongoose=require('mongoose');

const {database}=require('../url');


mongoose.connect(database,(err,success)=>{
    if(err)
        console.log(err);
    else
        console.log("database connected");
})

const user_collection=new mongoose.Schema({
    name:String,
    google_id:String,
    chat:[{
        user_id:String,
        msg:[{
            key:String,
            msg:String,
        }]
    }],
    group:[{
        name:String,
        chats:[{
            from:String,
            msg:String,
        }],
        member:[{name:String,user_id:String}]
    }],
})

const user_model=mongoose.model('users',user_collection);

module.exports={
    user_model
}