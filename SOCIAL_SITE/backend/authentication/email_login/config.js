const {temp_login_model,perma_login_model}=require("../google/db");
const router=require('express').Router();
const bcrypt=require('bcrypt');
const validator=require("email-validator");
const bodyparser=require('body-parser');
const mailer=require("nodemailer");
const session=require("express-session");
const cookieparser=require("cookie-parser");

const transport=mailer.createTransport({
    service:"Gmail",
    auth:{
        type:"OAuth2",
        user:"adityasaha890@gmail.com",
        clientId:"346194372918-rk66b7vp5otmjj4sv9g58c875iu0c902.apps.googleusercontent.com",
        clientSecret:"7hjKJG3T6hs-YJWoLCd9somB",
        refreshToken:"1/IvW-Qw-g6RRZog6G7oj2Kj7hQN49laI0U2sAWiRDSJY"
    }
})

const send=(email)=>{
    var mailoption={
        from:"social <adityasaha890@gmail.com>",
        to:email,
        subject:"Verification for socialsite",
        text:"Click the link below to complete registration",
        html:'<p>Click the link for verification<a href="http://localhost:3002/form/verify/'+email+'">Verify</a></p>'
    }
    transport.sendMail(mailoption,(err,res)=>{
        if(err)
            console.log(err)
        else
            console.log(res);
    })
}


router.post('/register',(req,res)=>{
    if(!validator.validate(req.body.email))
        res.status(403).json("Not a valid email");
    else{
        const db=new temp_login_model
        db.email=req.body.email;
        const hash=bcrypt.hashSync(req.body.password,10);
        db.password=hash;
        db.save().then(user=>send(user.email)).catch(err=>console.log(err))
    }
})
router.get("/verify/:email",(req,res)=>{
    temp_login_model.findOne({email:req.params.email}).then(user=>{
        const db=new perma_login_model
        db.email=user.email;
        db.password=user.password
        db.save().then(user=>req.session.user=user).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
    temp_login_model.deleteOne({email:req.params.email}).catch(err=>console.log(err))
})

router.post("/login",(req,res)=>{
    perma_login_model.findOne({email:req.body.email})
    .then(user=>{
       if(bcrypt.compareSync(req.body.password,user.password)){
            req.session.user=user;
            res.json(req.session.user);
       }
    })
})

module.exports=router;