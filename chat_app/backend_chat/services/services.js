const router=require('express').Router();
const {front}=require('../url');
const {user_model}=require('../db/db');


const {generateToken,decodeToken}=require('../jwt/encrypt');



const verify=(req,res,next)=>{
        const tkn=req.headers.authorization;
        if(tkn !== undefined){
            req.token=tkn.split(' ')[1];
            next();
        }
    else
        res.status(401).json({err:0});
}

// router.get('/loggedIn',(req,res)=>{
//     console.log(req.user);
// })


//generating jwt token and sending it to the frontend

router.get("/info",(req,res)=>{
    if(req.user){
    const tkn=generateToken(req.user._id);

    if(tkn)
        res.status(200).json(tkn);
    else
        res.status(403).json("err token not generated")
    }
    else
        res.status(403).json("session has expired");
})
//route to get user_id//
router.get('/user_id',verify,(req,res)=>{
    const user_id=decodeToken(req.token).user;
    if(user_id)
        res.status(200).json(user_id);
    else
        res.status(403).json({err:1});
})
//end 0f user_id//


//route to get the list of users//
router.get('/user_list',verify,(req,res)=>{
    const user_id=decodeToken(req.token).user;
    if(user_id){
        user_model.find({}).then(user=>{
            const users=user.filter(i=>{
                if(i._id != user_id){
                    return i;
                }
            })
            res.status(200).json(users);
        }).catch(err=>{
            res.status(403).json(err);
        })
    }
    else{
        res.status(401).json({err:1})
    }
})
//ending route to get users list


//saving chat messages into database
router.post('/save_chat',verify,(req,res)=>{
    console.log(req.body.data);
    console.log(req.body.to);
    const tkn=decodeToken(req.token).user;
    if(tkn){
        var chat_with_user=[];
        user_model.findById({_id:tkn}).then(user=>{
            chat_with_user=user;
            chat_with_user=JSON.stringify(chat_with_user);
            if(chat_with_user.indexOf(req.body.to) === -1){
                user_model.findOneAndUpdate({_id:tkn},{$addToSet:{'chat':{'user_id':req.body.to,'msg':req.body.data}}},{new:true}).then(user=>{
                    res.status(200).json({res:1});
                })
            }
            else{
                console.log("old")
                user_model.update({_id:tkn,'chat.user_id':req.body.to},{$push:{'chat.$.msg':req.body.data}},{new:true}).then(user=>{
                    res.status(200).json({res:1});
                })
            }
        })
    }
    else
        res.status(400).json({res:"err token verification"});
})
//end of saving data//  


//getting chats//
router.post('/get_chats',verify,(req,res)=>{
    console.log(req.body.h_id);
    const tkn=decodeToken(req.token).user;
    if(tkn){
    user_model.findById({_id:tkn}).then(user=>{
       var c_user=user.chat;
       //res.json(c_user);
       var msg=c_user.filter(i=>{
           if(i.user_id === req.body.h_id)
            return i.msg
       })
       if(msg.length)
        res.status(200).json(msg[0].msg);
    }).catch(err=>{console.log(err)});
}
else{
    res.status(403).json('Not Authorized');
}
})
//getting chats route ended//


router.post('/create_group',verify,(req,res)=>{
    const tkn=decodeToken(req.token).user;
    if(tkn){
        user_model.findByIdAndUpdate({_id:tkn},{$addToSet:{'group':{'name':req.body.name,'member':req.body.data}}}).then(user=>{
            res.status(200).json({res:1});
        }).catch(err=>{res.status(200).json("errr")});
    }
    else
        res.status(403).json("Not authorized");
})



module.exports=router