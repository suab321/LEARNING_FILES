//module import
const express=require('express');
const session=require('express-session');
const cookieparser=require('cookie-parser');
const bodyparser=require('body-parser');
const sessionStorage=require('connect-mongo')(session);
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();

//import developer made module
const {database_link,frontend_link}=require('./url');


//import routes
const {auth_route}=require('./authentication/authenticate');

mongoose.connect(database_link,(err,success)=>{
    if(err)
        console.log(err);
    else
        console.log("database connected");
})

//using middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors({
    credentials:true,
    origin: [`${frontend_link}`],
    methods:['GET','POST','PUT','DELETE']
}))
app.use(session({
    key:"suab321",
    secret:"user_sid",
    saveUninitialized:false,
    resave:false,
    store:new sessionStorage({
        mongooseConnection:mongoose.connection
    }),
    cookie:{maxAge:null}
}))

//naming routes
app.use('/authentication',auth_route);


//server port
app.listen(process.env.PORT||3002);