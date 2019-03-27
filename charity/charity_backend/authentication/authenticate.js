const {frontend_link}=require('../url');

const router=require('express').Router();
const cors=require('cors');

const {admin,user,student,application}= require('../database/db');
const {generateToken,decodeToken}=require('../jwt/jwt');


router.use((req,res,next)=>{
        res.header("Access-Control-Allow-Origin",`${frontend_link}`);
        res.header("Access-Control-Allow-Headers",'Accept,Authorization,Origin,Content-Type');
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");
        res.header("Access-Allow-Credentials","true")
        next();
})
//ADMINS ROUTES STARTED//

//login
router.post('/admin/login',(req,res)=>{
    admin.find({Email:req.body.email,Password:req.body.password}).then(user=>{
        if(user){
            const token=generateToken(user._id);
            if(token){
                req.session.user=token;
                res.status(200).json({response:1});
            }
        }
        else
            res.status(400).json({response:0});
    }).catch(err=>{
        res.status(400).json(err);
    })
})


//ADMIN ROUTES ENDED//


//USERS ROUTES STARTED//
router.post('/user/login',(req,res)=>{
    user.find({Email:req.body.email,Password:req.body.password}).then(user=>{
        if(user){
            const token=generateToken(user._id);
            if(token){
                req.session.user=token;
                res.status(200).json({response:1});
            }
        }
        res.status(400).json({response:0});
    }).catch(err=>{
        res.status(400).json(err);
    })
})
//USERS ROUTES ENDED//



//STUDENTS ROUTES STARTED//
router.post('/student/login',(req,res)=>{
    student.find({Email:req.body.email,Password:req.body.password}).then(user=>{
        if(user){
            const token=generateToken(user._id);
            if(token){
                req.session.user=token;
                res.status(200).json({response:1});
            }
        }
        res.status(400).json({response:0});
    }).catch(err=>{
        res.status(400).json(err);
    })
})
//STUDENTS ROUTES ENDED//


//USER APPLYING
router.post('/apply',(req,res)=>{
    const db=new application
    db.Name=req.body.Name;
    db.Age=req.body.Age;
    db.Role=req.body.Role;
    db.Info=req.body.Info;
    db.Gender=req.body.Gender;
    db.Phone=req.body.Phone;
    db.Email=req.body.Email;
    db.save().then(user=>{
        res.status(200).json({response:1});
    }).catch(err=>{
        res.status(400).json({response:0});
    })
})
//USER APPLYING ENDED



module.exports={
    auth_route:router
}

