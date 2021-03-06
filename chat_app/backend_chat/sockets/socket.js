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
                if(i.user_id === data.id){
                    i.socket_id=connected_socket.id;
                    t=0;
                }
            })
            if(t){
                active_users.push({socket_id:connected_socket.id,user_id:data.id});
                console.log("Active users are "+active_users.length);
                io.sockets.emit("active_users",active_users);
            }
        })
        connected_socket.on("disconnect",()=>{
            console.log('disconnected');
            const x=active_users.filter(i=>{
                if(i.socket_id !== connected_socket.id)
                    return i;
            })
            active_users=x;
            console.log(' No. of Active users '+active_users.length)
            io.sockets.emit("active_users",active_users);
        })
        connected_socket.on('new_message_sender',(message)=>{
            console.log(message)
            console.log(connected_socket.id);
            const his_id=active_users.filter(i=>{
                if(i.user_id === message.to)
                    return i;
            })
            // console.log(his_id);
            // console.log(his_id[0].socket_id);
            if(his_id[0] === undefined){
                user_model.findById({_id:message.to}).then(user=>{
                    chat_with_user=user;
                    chat_with_user=JSON.stringify(chat_with_user);
                    if(chat_with_user.indexOf(req.body.to) === -1){
                        user_model.findOneAndUpdate({_id:message.to},{$addToSet:{'chat':{'user_id':message.from,'msg':message.msg}}},{new:true}).then(user=>{console.log(user)})
                    }
                    else{
                        console.log("old")
                        user_model.update({_id:message.to,'chat.user_id':messaage.from},{$push:{'chat.$.msg':message.msg}},{new:true}).then(user=>{
                            console.log(user);
                        })
                    }
                })
            }
            else
                io.to(his_id[0].socket_id).emit('new_message_recevier',message);
        })
     })
}
module.exports={
    connection
}