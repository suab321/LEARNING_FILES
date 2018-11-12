const mongoose=require('mongoose');
const Grid=require("gridfs-stream");
const  Gridstorage=require("multer-gridfs-storage");
const multer=require("multer");

mongoose.Promise=global.Promise

const mongourl="mongodb://127.0.0.1/social_site";
mongoose.connect(mongourl).catch(err=>console.log(err));
const connection=mongoose.createConnection('mongodb://127.0.0.1/imagedb');
let gfs;
connection.once("open",()=>{
    gfs=Grid(connection.db,mongoose.mongo)
})

const storage=new Gridstorage({
    url:mongourl,
    file:(req,file)=>{
        const fileInfo={
            fileName:file.originalname
        }
    }
})
const upload=multer({storage}).single('file');


const google_schema=new mongoose.Schema({user:String,googleid:String})
const g_model=mongoose.model("google_user_table",google_schema);

const temp_login_schema=new mongoose.Schema({email:{type:String,unique:true},password:String,name:{type:String,required:true}})
const temp_login_model=mongoose.model("temp_login_via_email",temp_login_schema);

const perma_login_schema=new mongoose.Schema({email:{type:String,unique:true},password:String,name:{type:String,required:true}})
const perma_login_model=mongoose.model("perma_login_via_email",perma_login_schema);

const friend_scehma=new mongoose.Schema({fr_id:String,chat:[String]})

const user_reg_in_schema=new mongoose.Schema({proid:String,post:[String],profile_pic:[String],friend:[{fr_id:String,chat:String}],friend_id:[String]})
const users_reg_in_model=mongoose.model('users details',user_reg_in_schema);


module.exports={
    upload,
    perma_login_model,
    temp_login_model,
    google_model:g_model,
    users_reg_in_model
}