//node-modules
const express=require('express');
const session=require('express-session');
const sessionStore=require('connect-mongo')(session);
const bodyParser=require('body-parser');
const passport=require('passport');
const mongoose=require('mongoose');
const cor=require('cors');
const socket=require('socket.io');
//node modules ends here//

//developer made modules//
const {google_router}=require('./authentication/route');
const {upload_service_route}=require('./video_services/video');
const {stream_route}=require('./database/db');
const {frontend_url}=require('./url');
const {connection}=require('./socket/socket')
require('./authentication/config');
//developer made modules ends here//

const app=express();


const sessionObj=session({
    key:"user_sid",
    secret:"suab",
    cookie:{maxAge:1000*60*60*24*2,httpOnly:true},
    resave:false,
    saveUninitialized:false,
    store:new sessionStore({
        mongooseConnection:mongoose.connection
    })
})
app.use(sessionObj);

//using cors for sharing data in cross website//
app.use(cor({
    origin:frontend_url,
    credentials:true,
}))
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',frontend_url);
    res.header('Access-Control-Allow-Credentials',true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials","true")
    next();
})
//ended//

//middleware function to check session of user//
function check_session(req,res,next){
    if(req.session.user)
        next();
    else
        res.status(401).json({code:401});
}
//ends//

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/authentication',google_router);
app.use('/video_service',upload_service_route);
app.use('/streaming',stream_route);



//route to check is loggedIn//
app.get('/',check_session,(req,res)=>{
    if(req.user)
        res.status(200).json({user_id:req.user._id,name:req.user.name});
})
//route ends//

//route to logout users//
app.get('/logout',check_session,(req,res)=>{
    req.session.user=undefined;
     res.status(200).json();
})
//route ends//


const listen=app.listen(process.env.PORT||3002);
let io=socket(listen);
io.use((socket,next)=>{
    sessionObj(socket.request,socket.request.res,next);
})
connection(io);
