const clusetr=require('cluster');
const os=require('os');

if(clusetr.isMaster){
    for(var i=0;i<os.cpus().length;i++)
        clusetr.fork();
    clusetr.on('exit',()=>{clusetr.fork()})
    
}
else{
    require('./server');
}