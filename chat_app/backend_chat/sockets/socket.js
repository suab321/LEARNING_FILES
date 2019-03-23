const socket=require('socket.io');


const {user_model}=require('../db/db');

var io,connected_socket;
var clients=0;
var sessions=[]
function connection(port){
     io=socket(port);
     io.on('connection',socket=>{
         clients++;
         connected_socket=socket;
         sessions.push(connected_socket.id);
         console.log("now connected clients are "+clients);
         console.log("sessions are "+sessions)
         io.to(sessions[0]).emit("to_me",{msg:'howdy'});
         connected_socket.on('disconnect',()=>{
             clients--;
             sessions.splice(sessions.indexOf(connected_socket.id),1);
             console.log("Clients are "+clients);
             console.log("sessions are "+sessions);
         })
     })
}
module.exports={
    connection
}