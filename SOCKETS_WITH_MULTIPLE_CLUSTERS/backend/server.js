const cluster=require('cluster');
const express=require('express');
const farmhash=require('farmhash');
const socket=require('socket.io');
const net=require('net');
const os=require('os');
const http=require('http');
const ss=require('sticky-session');

const socket_redis=require('socket.io-redis');

const server_port='3000'
const ins=os.cpus().length;
var workers=[];

if(cluster.isMaster){
    for(var i=0;i<ins;i++)
        workers.push(cluster.fork());

    // const get_worker_index=(ip,len)=>{
    //     console.log(ip);
    //     return farmhash.fingerprint32(ip)%len;
    // }
    // net.createServer({
    //     pauseOnConnect:true,
    // },(connection)=>{
    //     console.log(connection);
    //     const worker=workers[get_worker_index(connection.remoteAddress,ins)];
    //     worker.send({cmd:'stickySession'},connection);
    // }).listen('3002');
}
else{
    console.log(process.pid);

    const app=express();
    // const server=http.createServer(app);
    app.set('view engine','ejs');

    app.get("/",(req,res)=>{
        res.render('abhi');
    });
    // ss.listen(server,3000);
    // const port=app.listen(server_port);
    const port=app.listen(3000);
    const io=socket(port);
    io.adapter(socket_redis({host:'localhost',port:'6379'}))
    io.on("connection",socket=>{
        console.log(process.pid,socket.id);
        io.emit("new connected",socket.id)
    })
}