const mongoose=require('mongoose');
const multer=require('multer');
const GridStorage=require('multer-gridfs-storage');
const Grid=require('gridfs-stream');
const router=require('express').Router();
const ffmpeg=require('ffmpeg');


//developer made imports
const {db_url}=require('../url');
//developer made imports ends//


mongoose.connect(db_url,{useNewUrlParser:true,useCreateIndex:true});
let connection=mongoose.connection
let gfs;
connection.once('open',()=>{
    gfs=Grid(connection.db,mongoose.mongo);
})
const storage=new GridStorage({
    url:db_url,
    file:(req,file)=>{
        const fileInfo=file.filename
    }
})

const upload=multer({storage}).single('file');



const channel=new mongoose.Schema({
    name:String,
    google_id:{type:String,unique:true},
    myVideos:[{type:mongoose.Schema.Types.ObjectId,ref:'Video'}],
    Videos:[{type:mongoose.Schema.Types.ObjectId,ref:'Video'}],
    Subscriber:Number,
    channelSubscribed:[{type:mongoose.Schema.Types.ObjectId,ref:'Channel'}]
})

const video=new mongoose.Schema({
    video_id:String,
    thumbnail:String,
    creator:{type:mongoose.Schema.Types.ObjectId,ref:'Channel'},
    likes:Number,
    comments:[{
        ByChannel:{type:mongoose.Schema.Types.ObjectId,ref:'Channel'},
        msg:String,
        replies:[{
            ByChannel:{type:mongoose.Schema.Types.ObjectId,ref:'Channel'},
            msg:String
        }]
    }],
    Title:String,
    views:Number,
    Description:String
})

const Channel=mongoose.model('Channel',channel);
const Video=mongoose.model('Video',video);


//route to stream a video given its video_ID//
router.get('/stream_video/:video_id',async(req,res)=>{
    try{
        let data1=await Video.findById({_id:req.params.video_id});
        console.log(data1);
        gfs.files.findOne({filename:data1.video_id},(err,data)=>{
            if(err)
                res.status(400).json({msg:"Video cannot be found in database"});
            else{
                gfs.createReadStream(data.filename).pipe(res);
            }
        })
    }catch(err){
        res.status(400).json({msg:"This video has been deleted by the uploader"});
    }
})
//route ends//

//route to stream its video given its filename//
router.get('/stream_filename/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},(err,data)=>{
        if(err)
            res.status(400).json({msg:"Unable to fetch video from database"});
        else{
            gfs.createReadStream(data.filename).pipe(res);
        }
    })
})
//route ends//

//route to get a image thumbnail from its filename//
router.get('/get_image/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},(err,data)=>{
        if(err)
            res.status(400).json({msg:"unable to fetch"});
        else{
        }
    })
})
//route ends//

module.exports={
    Channel,
    Video,
    upload_engine:upload,
    stream_route:router
}
