const express=require('express');
const os=require('os');
const cluster=require('cluster');
const cp=require('child_process');

if(cluster.isMaster){
    for(let i=0;i<os.cpus().length;i++)
        cluster.fork();
}
else{
    const app=express();
    app.get('/',(req,res)=>{res.send("hello")})
    cp.fork('./heavy.js');
    app.listen(3000);
    console.log(`process ${process.pid}`);
}

