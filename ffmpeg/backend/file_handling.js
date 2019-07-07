const multer=require('multer')
const GridStorage=require('multer-gridfs-storage')
const Grid=require('gridfs-stream');
const mongoose=require('mongoose');
const fs=require('fs');
const path=require('path');

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffmpeg=require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);


const router=require('express').Router();

const {mongo_url}=require('./url')

let connection=mongoose.createConnection(mongo_url,{useNewUrlParser:true});
let gfs;

connection.once('open',()=>{
    gfs=Grid(connection.db,mongoose.mongo);
})
const storage=new GridStorage({
    url:mongo_url,
    file:(req,file)=>{
        filename=file.originalname
    }
})

const upload=multer({dest:"uploads/"}).single('file');

router.post('/upload',(req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.status(400).json({code:"1"});
            console.log(err);
        }
        else{
            console.log(req.file);
            let abs_path=path.join(__dirname+'/'+req.file.path);
            let data=fs.readFileSync(abs_path,'utf8');
            res.status(200).send(data);
            
        }
    })
})

router.post('/get_thumbnail',(req,res)=>{
    upload(req,res,err=>{
        if(err)
            res.status(400).json("error");
        else{
            res.status(200).json(req.file);
        }
    })
})
router.get('/get_file/:filename',(req,res)=>{
    // gfs.files.findOne({filename:req.params.filename}).then(res=>{
        //res.sendFile(__dirname+"/uploads/"+req.params.filename);
        var data=new ffmpeg(__dirname+"/uploads/obb")
        .takeScreenshots({
            count:1,
            timemarks:['5']
        },__dirname+"/uploads",err=>{

        })
    // })
})

module.exports={
    file_upload:router
}