const express=require('express')
const google_passport_setup=require('./authentication/google/config');
const google_routes=require("./authentication/google/route");
const passport=require('passport');
const session=require("express-session");
const app=express();
const cors=require("cors");
const jwt=require("jsonwebtoken");
const bodyparser=require("body-parser");

app.set('view engine','ejs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials","true")
       next();
 });

app.use(session({key:"suab321",secret:"abhi",cookie:{maxAge:null}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.render('index');
})
app.use("/google",google_routes);

const tokenverify=(req,res,next)=>{
    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader==='undefined')
        res.status(403).json("no user!");
    else{
        const bearer=bearerHeader.split(' ');
        const token=bearer[1];
        req.token=token;
        next();
    }
}

app.post("/upload",tokenverify,(req,res)=>{
    jwt.verify(req.token,"abhi",(err,authdata)=>{
        if(err)
            res.status(403).json("no one");
    })
    res.status(201).json("posted")
})

app.get('/name',tokenverify,(req,res)=>{
    jwt.verify(req.token,"abhi",(err,authdata)=>{
        if(err)
            res.status(403).json(err);
        else
            res.status(200).json(authdata);
    })
})

app.get('/user',(req,res)=>{
    if(req.user===undefined)
        res.status(400).json("No user")
    else{
        console.log(req.user)
        jwt.sign({user:req.user},"abhi",(err,token)=>{
        if(err)
            console.log(err)
        else
           res.status(200).json(token)
    })
  }
})


app.listen(3002);