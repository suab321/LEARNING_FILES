const cluster=require('cluster');
var cp=require('child_process')
const os=require('os');
const express=require('express');
const http=require('http');
const ss=require('sticky-session');


if(cluster.isMaster){
    // console.log(os.cpus().length);
    for(var i=0;i<os.cpus().length;i++)
        cluster.fork();
}
else{
    cluster.on('exit',()=>{cluster.fork()})
    // console.log(cluster);
    require('./server.js');
}