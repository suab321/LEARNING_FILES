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

const user_reg_in_schema=new mongoose.Schema({proid:String})
const user_reg_in_model=mongoose.model("user present in website",user_reg_in_schema);

const users_details_schema=new mongoose.Schema({
    profile_id:String,
    post:[String],
    profile_pic:[String]
})
const users_details_model=mongoose.model('users details',users_details_schema);


module.exports={
    upload,
    users_details_model,
    perma_login_model,
    temp_login_model,
    google_model:g_model,
    user_reg_in_model
}