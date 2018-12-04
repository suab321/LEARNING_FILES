const {temp_login_model,perma_login_model}=require("../google/db");
const router=require('express').Router();
const bcrypt=require('bcrypt');
const validator=require("email-validator");
const bodyparser=require('body-parser');
const mailer=require("nodemailer");
const {users_reg_in_model}=require("../google/db");

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
            res.json('ok');
    })
}

//registering users
router.post('/register',(req,res)=>{
    if(!validator.validate(req.body.email))
        res.status(403).json("Not a valid email");
    else{
        perma_login_model.findOne({email:req.body.email},(err,user)=>{
            if(user)
                res.status(403).json("Already Present")
        })
        const db=new temp_login_model
        db.name=req.body.name;
        db.email=req.body.email;
        if(!req.body.password===req.body.cpassword)
            res.status(403).json('password dont match!');
        const hash=bcrypt.hashSync(req.body.password,10);
        db.password=hash;
        db.save().then(user=>{send(user.email)
            res.redirect('http://localhost:3000/verification')})
        .catch(err=>console.log(err))
    }
})
router.get("/verify/:email",(req,res)=>{
    temp_login_model.findOne({email:req.params.email}).then(user=>{
        const data=new perma_login_model
        data.email=user.email
        data.password=user.password
        data.name=user.name
        data.save()
        .then(user=>{
            const data=new users_reg_in_model
            data.proid=user._id
            data.save().catch(err=>console.log(err))
            temp_login_model.findOneAndDelete({email:req.params.email}).then(user=>{res.redirect('https://localhost:3000/all_user')})
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
})

//logging in users
router.post("/login",(req,res)=>{
    perma_login_model.findOne({email:req.body.email})
    .then(user=>{
       if(bcrypt.compareSync(req.body.password,user.password)){
            req.session.user=user;
            res.redirect('http://localhost:3000')
       }
    }).catch(err=>res.status(403).json("Not a Registered User!"))
})
router.get('/logout',(req,res)=>{
    res.clearCookie('user_sid').redirect('http://localhost:3000')
})


module.exports=router;