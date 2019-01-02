const express=require('express');
const app=express()
app.use(express.static('public'));
const srv=app.listen(process.env.PORT||9000)
app.use('/peerjs',require('peer').ExpressPeerServer(srv,{debug:true}))
app.get('/',(req,res)=>{res.render('index.html')})