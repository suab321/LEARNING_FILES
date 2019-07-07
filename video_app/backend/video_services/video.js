const router=require('express').Router();

//importing developer made modules//
const {upload_engine,Channel,Video}=require('../database/db');
const {decodeToken}=require('../jwt/jwt')
//importing developers made modules ends//



//req.token gives the user id for querying in database//

//function middleware to check if session exits//
function check_session(req,res,next){
    if(req.session.user){
        req.token=req.session.user;
        next();
    }
    else
        res.status(401).json({code:401});
}
//function ends//

//funciton middleware to check if a user is in the database//
function validateToken(req,res,next){
    const userID=decodeToken(req.token).user;
        Channel.findById({_id:userID}).then(user=>{
            req.token=user._id;
            next();
        }).catch(err=>{
            res.status(401).json({code:401,msg:"User is not in the database"});
        })
}
//function ends//

//route to upload a video by user//
router.post('/upload',[check_session,validateToken],async(req,res)=>{
            upload_engine(req,res,async(err)=>{
                if(err)
                    res.status(400).json({code:400,msg:"Error uploading file"});
                else{
                        const db=new Video;
                        db.video_id=req.file.filename;
                        db.creator=req.token;
                        db.save().then(user=>{
                            res.status(200).json({msg:user._id});
                        }).catch(err=>{res.status(400).json({msg:"error updating video object"})});
                }
        })
})
//routes ends//

//route to upload image thumbnail
router.post('/upload_thumbnail',[check_session,validateToken],async(req,res)=>{
    console.log(req.body)
    upload_engine(req,res,async(err)=>{
        if(err)
            res.status(400).json({msg:"Error uploading file to database"});
        else{
            res.status(200).json({msg:req.file.filename});
        }
    })
})
//route ends//

//route to update the video obejct in Video Collection//
router.post('/video_details',[check_session,validateToken],async(req,res)=>{
    console.log(req.body);
    try{
        let data1=await Video.findByIdAndUpdate({_id:req.body.video_id},
            {Title:req.body.Title,Description:req.body.Description,thumbnail:req.body.thumbnail});
            try{
                await Channel.findByIdAndUpdate({_id:req.token},{$push:{'myVideos':data1._id}});
                res.status(200).json({msg:"update successful"});
            }catch(err){
                res.status(400).json({});
            }
    }catch(err){
        res.status(400).json({msg:"Error upadting video object"});
    }
})
//route ends//

//route to get list of videos of users//
router.get('/get_videos_list',[check_session,validateToken],async(req,res)=>{
    Channel.findById({_id:req.token}).populate('myVideos').exec((err,videos)=>{
        if(err)
            res.status(400).json({msg:"Error connecting Video collection with Channel collection"});
        else
            res.status(200).json(videos.myVideos);
    })
})
//route ends//

//route to get videos of other channels//
router.get('/get_videos_list_others',[check_session,validateToken],async(req,res)=>{
    Channel.find({}).populate('myVideos').exec((err,videos)=>{
        if(err)
            res.status(400).json({msg:"Unable to fetch data from database"});
        else{
            const data=videos.filter((i)=>{
                if((String)(i._id) !== (String)(req.token))
                    return i;
            })
            res.status(200).json(data);
        }
    })
})
//route ends//

//route to update views or like or comments//
router.post('/update',[check_session,validateToken],(req,res)=>{
    if(req.body.type === "views"){
        Video.findOneAndUpdate({video_id:req.body.filename},{$inc:{views:1}})
        .then(user=>{res.status(200).json("Updated view")})
        .catch(err=>{res.status(400).json("Unable to update view")});
    }
    else if(req.body.type === "likes"){
        Video.findOneAndUpdate({video_id:req.body.filename},{$inc:{likes:1}})
        .then(user=>{res.status(200).json("Updated")})
        .catch(err=>{res.status(400).json("Error updating")});
    }
    else if(req.body.type === "dislikes"){
        Video.findOneAndUpdate({video_id:req.body.filename},{$inc:{dislikes:1}})
        .then(user=>{res.status(200).json("Updated")})
        .catch(err=>{res.status(400).json("Error updating")});
    }
})
//route ends//

//route to add comments//
router.post('/add_comment',[check_session,validateToken],(req,res)=>{
    console.log(req.body);
    if(req.body.type === "video"){
    const comment_obj={
        'ByChannel':req.token,
        'msg':req.body.msg,
        'replies':[]
    }
    Video.findOneAndUpdate({video_id:req.body.filename},{$addToSet:{'comments':comment_obj}},{new:false}).then(user=>{res.status(200).json(user)})
    .catch(err=>{res.status(400).json("error adding comment")});
    }
})
//route ends//



module.exports={
    upload_service_route:router
}