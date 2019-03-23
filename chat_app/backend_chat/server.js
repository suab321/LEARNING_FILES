const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const session=require('express-session');
const cors=require('cors');
const store=require('connect-mongo')(session);
const passport=require('passport');
const cookieparser=require('cookie-parser');
const passportsetup=require('./authentication/config');

const auth_route=require('./authentication/route');
const service_auth=require('./services/services');
const {front}=require('./url');
const {connection}=require('./sockets/socket');


const {database}=require('./url');
const app=express();

mongoose.connect(database,(err,success)=>{
    if(err)
     console.log(err);
    else
     console.log("database connected");
 })

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials","true")
       next();
 });
app.use(cookieparser())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use(session({
    key:"user_sid",
    secret:"suab",
    resave:false,
    saveUninitialized:false,
    store:new store({mongooseConnection:mongoose.connection}),
    cookie:{maxAge:null}
}))
app.use(passport.initialize());
app.use(passport.session());



app.use('/authentication',auth_route);
app.use('/services',service_auth);







app.get('/yes',(req,res)=>{
    console.log(req.user);
})


const port=app.listen(process.env.PORT || 3002);
connection(port);
