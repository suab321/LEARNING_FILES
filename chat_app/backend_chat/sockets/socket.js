const socket=require('socket.io');


const {user_model}=require('../db/db');

var io;var connected_socket;
var clients=0;
var active_users=[]
function connection(port){
     io=socket(port);
     io.on('connection',socket=>{
         connected_socket=socket;
        connected_socket.on("user_connected",data=>{
            var t=1;
            active_users.forEach(i=>{
                if(i.user_id === data.id)
                    t=0;
            })
            if(t){
                active_users.push({socket_id:connected_socket.id,user_id:data.id});
                console.log(active_users);
                console.log("Active clients are "+active_users.length);
                io.sockets.emit("active_users",active_users);
            }
        })
        connected_socket.on("disconnect",()=>{
            const x=active_users.filter(i=>{
                if(i.socket_id != connected_socket.id)
                    return i;
            })
            active_users=x;
            io.sockets.emit("active_users",active_users);
        })
     })
}
module.exports={
    connection
}