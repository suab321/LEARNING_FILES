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
//route to get user_id
router.get('/user_id',verify,(req,res)=>{
    const user_id=decodeToken(req.token).user;
    if(user_id)
        res.status(200).json(user_id);
    else
        res.status(403).json({err:1});
})


//route to get the list of users
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


module.exports=router