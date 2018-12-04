const app=require('express')();
const google_passport_setup=require('./authentication/google/config');

const google_routes=require("./authentication/google/route");
const login_routes=require("./authentication/email_login/config");
const io=require('socket.io');
const passport=require('passport');
const session=require("express-session");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const cookieparser=require('cookie-parser');
const bodyparser=require("body-parser");
const {upload,users_reg_in_model,perma_login_model,google_model,router_image}=require('./authentication/google/db');

app.set('view engine','ejs');
app.use(cors({
    credentials:true,
}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials","true")
       next();
 });
app.use(cookieparser());
app.use(session({key:"user_sid",secret:"suab",resave:true,saveUninitialized:true,cookie:{maxAge:null}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({extended:false,limit:'50mb'}));
app.use(bodyparser.json());
app.use("/form",login_routes);
app.use("/google",google_routes);
app.use('/image',router_image);

app.get('/',(req,res)=>{
    res.render('index');
})



const tokenverify=(req,res,next)=>{
    const bearerHeader=req.headers["authorization"];
    console.log(req.headers)
    if(typeof bearerHeader==='undefined')
        res.status(403).json("err verifying token!");
    else{
        const bearer=bearerHeader.split(' ');
        const token=bearer[1];
        req.token=token;
        next();
    }
}

app.get('/name',tokenverify,(req,res)=>{
    jwt.verify(req.token,"abhi",(err,authdata)=>{
        if(err)
            res.status(403).json(err);
        else
            res.status(200).json(authdata);
    })
})

//method to get the current user
app.get("/user",(req,res)=>{
    if(req.session.user){
        console.log(req.session.user);
        jwt.sign({user:req.session.user},"abhi",(err,token)=>{
            if(err)
                console.log(err);
            else{
                res.status(200).json(token);
            }
        })
    }
   else if(req.user){
       console.log(req.user)
        jwt.sign({user:req.user},"abhi",(err,token)=>{
            console.log(req.user);
            if(err)
                console.log(err);
            else{
                res.status(200).json(token);
            }
        })
    }
    else
        res.status(403).json("no one");
})

//method to upload profile photos by users
app.post("/upload/profile_pic",tokenverify,(req,res)=>{
            jwt.verify(req.token,'abhi',(err,authdata)=>{
                if(err)
                    res.status(403).json("err verifying token!");
            upload(req,res,err=>{
                if(err){
                    console.log(err)
                    res.status(405).json('token verification error')
                }
                else{
                    console.log(req.file)
                users_reg_in_model.findOne({proid:authdata.user._id}).then(user=>{
                    if(user.length!==0){
                        users_reg_in_model.findOneAndUpdate({proid:authdata.user._id},{$addToSet:{'profile_pic':req.file.filename}})
                    .catch(err=>console.log(err))
                    }
                    else{
                        const db=new users_reg_in_model
                        db.proid=req.user._id;
                        db.save().then(user=>{
                            users_reg_in_model.findOneAndUpdate({proid:user.proid},{$addToSet:{'profile_pic':req.file.filename}})
                            .catch(err=>console.log(err));
                        })
                    }
                })
                res.status(201).json(req.file);
            }
        })
    })
})

//method to post photos by users
app.post("/upload/post",(req,res)=>{
    upload(req,res,err=>{
        if(err)
            res.status(405).json("failed")
        else{
        console.log(req.file)
        if(req.user){
        users_reg_in_model.findOne({proid:req.user._id}).then(user=>{
            if(user.length!=0){
                users_reg_in_model.findOneAndUpdate({proid:req.user._id},{$addToSet:{'post':req.file.filename}})
            .catch(err=>console.log(err))
            }
            else{
                const db=new users_reg_in_model
                db.proid=req.user._id;
                db.save().then(user=>{
                    users_reg_in_model.findOneAndUpdate({proid:user.proid},{$addToSet:{'post':req.file.filename}})
                    .catch(err=>console.log(err));
                })
            }
        })
        res.status(201).json(req.file);
        }
        else if(req.session.user){
            users_reg_in_model.findOne({proid:req.session.user._id}).then(user=>{
                if(user.length!=0){
                    users_reg_in_model.findOneAndUpdate({proid:req.session.user._id},{$addToSet:{'post':req.file.filename}})
                .catch(err=>console.log(err))
                }
                else{
                    const db=new users_reg_in_model
                    db.proid=req.user._id;
                    db.save().then(user=>{
                        users_reg_in_model.findOneAndUpdate({proid:user.proid},{$addToSet:{'post':req.file.filename}})
                        .catch(err=>console.log(err));
                    })
                }
            })
            res.status(201).json(req.file);
        }
        }
})
})

//method to for chatting
app.post('/add_message',tokenverify,(req,res)=>{
    jwt.verify(req.token,'abhi',(err,authdata)=>{
        if(err)
            res.status(405).json('token verification error')
        users_reg_in_model.findOneAndUpdate({proid:authdata.user._id},{$addToSet:{'friend':{'fr_id':req.body.to,'chat':req.body.message}}})
        .then(user=>res.status(201).json(user))
        .catch(err=>res.json(err))
    })
 })

 //method to add friends
 app.post('/add_friend',tokenverify,(req,res)=>{
    jwt.verify(req.token,'abhi',(err,authdata)=>{
        if(err)
            res.status(405).json('Error in token verification');
     users_reg_in_model.findOneAndUpdate({proid:authdata.user._id},{$addToSet:{'friend':req.body.friend_id}})
     .then(user=>res.status(200).json(user))
     .catch(err=>res.status(400).json(err))
    })
     
 })

//method to get all users
app.get('/get_all_user',tokenverify,(req,res)=>{
    jwt.verify(req.token,'abhi',(err,authdata)=>{
        if(err)
            res.status(403).json('no one')
        else{
            users_reg_in_model.find().then(user=>{
            const main_users=user.filter(user=>{
            if(user.proid!=authdata.user._id)
                return user;
            })
            res.status(200).json(main_users);
        })
      }
   })
})

//method to get name of users based on their profile_id
app.get('/get_name/:id',(req,res)=>{
    perma_login_model.findById({_id:req.params.id}).then(user=>{
       if(user)
            res.status(200).json(user.name);
        else{
            google_model.findById({_id:req.params.id}).then(user=>{
                res.status(200).json(user.user)
            })
        }
        
    })
})
//method to get users profile
app.get('/get_profile/:id',(req,res)=>{
    users_reg_in_model.findOne({proid:req.params.id}).then(user=>{
        perma_login_model.findById({_id:req.params.id}).then(user=>{
            if(user)
            res.status(200).json(user.name)
            else{
                google_model.findById({_id:req.params.id}).then(user=>{
                    if(user)
                        res.status(200).json(user.user)
                    else
                        res.redirect('http://localhost:3000')
                })
            }
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})

//loggingOut users
app.get('/logout',(req,res)=>{
    if(req.user){
        req.logout();
        res.redirect('https://localhost:3000')
    }
    else if(req.session.user){
        if(req.session.user && req.cookies.user_sid){
            res.clearCookie('user_sid')/json('ok');
        }
    }
})
const server=app.listen(process.env.PORT||3002);
//socket
var conn=io(server);
conn.on('connection',(socket)=>{
    console.log("socket");
    socket.on('chat',(msg)=>{
        console.log(msg);
    })
})


