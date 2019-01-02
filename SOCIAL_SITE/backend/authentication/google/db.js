const mongoose=require('mongoose');
const Grid=require("gridfs-stream");
const  Gridstorage=require("multer-gridfs-storage");
const multer=require("multer");
const express=require('express');
const router=express.Router();

mongoose.Promise=global.Promise

const mongourl="mongodb://127.0.0.1/social_site";
mongoose.connect(mongourl).catch(err=>console.log(err));
const mongourl2='mongodb://127.0.0.1/imagedb'
const connection=mongoose.createConnection(mongourl2);
let gfs;
connection.once("open",()=>{
    gfs=Grid(connection.db,mongoose.mongo)
})

const storage=new Gridstorage({
    url:mongourl2,
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


const user_reg_in_schema=new mongoose.Schema({proid:String,name:String,post:[String],profile_pic:[String],friend:[{fr_id:String,chat:String}],friend_id:[String]})
const users_reg_in_model=mongoose.model('users details',user_reg_in_schema);

//method to retrive proifle image of other users
router.get('/get_profile_image/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},(err,file)=>{
        if(file){
            const readStream=gfs.createReadStream(file.filename)
            readStream.pipe(res);
    }
    else{
        const readStream=gfs.createReadStream('ea19e148f7e8565244c3f31c1b8dc013');
        readStream.pipe(res);
    }
    })
})
router.get('/all_image',(req,res)=>{
    gfs.files.find({}).toArray().then(files=>res.json(files)).catch(err=>res.json(err))
})

const tokenverify=(req,res,next)=>{
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader==='undefined')
        res.status(403).json('no one');
    req.token=bearerHeader.split(' ')[1];
    next();
}

//to get profile image of user
router.get('/profile_image',(req,res)=>{
    if(req.session.user){
    users_reg_in_model.findOne({proid:req.session.user._id}).then(user=>{
        const profile_image=user.profile_pic[user.profile_pic.length-1]
        gfs.files.findOne({filename:profile_image},(err,file)=>{
            if(file){
                const readStream=gfs.createReadStream(file.filename)
                readStream.pipe(res);
            }
        })
      })
    }
    else if(req.user){
        users_reg_in_model.findOne({proid:req.user._id}).then(user=>{
            const profile_image=user.profile_pic[user.profile_pic.length-1]
            if(!profile_image==='undefined'){
            gfs.files.findOne({filename:profile_image},(err,file)=>{
                if(file){
                    const readStream=gfs.createReadStream(file.filename)
                    readStream.pipe(res);
                }
            })
          }
        })
    }
})

router.get('/all_profile_pic/:filename',tokenverify,(req,res)=>{
    jwt.verify(req.token,'abhi1',(err,authdata)=>{
        if(err)
            res.status(405).json('Err verifying token')
                gfs.files.findOne({filename:req.params.filename},(err,file)=>{
                    if(file){
                        const readStream=gfs.createReadStream(file.filename);
                        readStream.pipe(res);
                    }
                    else if(err){
                        const readStream=gfs.createReadStream('ea19e148f7e8565244c3f31c1b8dc013')
                        readStream.pipe(res);
                    }
                })
        })
})
module.exports={
    router_image:router,
    gfs,
    upload,
    perma_login_model,
    temp_login_model,
    google_model:g_model,
    users_reg_in_model
}