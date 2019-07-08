const express=require('express')
const bodyParser=require('body-parser');
const pusher=require('pusher');

require('dotenv').config();


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const p=new pusher({
    appId:process.env.PUSHER_APP_ID,
    key:process.env.PUSHER_APP_KEY,
    secret:process.env.PUSHER_APP_SECRET,
    cluster:process.env.PUSHER_APP_CLUSTER
});

app.get('/',(req,res)=>{
    p.trigger('notification','Notified',{abhi:"hello"},req.headers['x-socket-id']);
    res.send('');
})

app.listen(3002);