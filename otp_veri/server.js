const express=require('express');
const bodyparser=require('body-parser');
const {usermodel,verifiedmodel}=require('./db');
const sendotp=require('sendotp');
const otp=new sendotp('263568AkKrW6GTgiCD5c6aa346');
const jwt=require('jsonwebtoken');

const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(express.static('views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/sendotp',(req,res)=>{
    console.log(req.body.mobile)
    otp.send(req.body.mobile,'621130',(err,data)=>{
        if(data.type === "success"){
            const db=new usermodel;
            db.name=req.body.name;
            db.phone=req.body.mobile;
            db.save().then(user=>{
                if(user){
                    jwt.sign({user:req.body.mobile},"suab",(err,token)=>{
                        if(token){
                            res.redirect(`/verify/${token}`);
                        }
                        else{
                            console.log(err);
                            res.redirect('/');
                        }
                    })
                }
            }).catch(err=>res.redirect('/'));
        }
    })
})
app.route('/verify/:mobile')
    .get((req,res)=>{
        res.render('verify',{mobile:req.params.mobile});
    })
    .post((req,res)=>{
        jwt.verify(req.params.mobile,"suab",(err,authdata)=>{
            //console.log(no);
            otp.verify(authdata.user,req.body.otp,(err,data)=>{
                if(data.type === "success"){
                    const db=new verifiedmodel
                    db.phone=req.body.no;
                    db.save().then(user=>{
                        if(user){
                            res.json("Successfully registered");
                        }
                        else{
                            res.send("Failure");
                        }
                    })
                }
                else{
                    res.json("Otp does not match")
                }
            })
        })
        //otp.verify()
    })

app.listen(process.env.PORT||3002);