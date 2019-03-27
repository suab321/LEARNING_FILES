const io =require('socket.io-client');


 var active_users=[];
 var connected_socket;

const connection=(url)=>{
    connected_socket=io(`${url}`);
    connected_socket.emit("user_connected",{id:localStorage.getItem('id')});
    connected_socket.on("active_users",(data)=>{
       active_users=data;
   });
}

function get_active_users(){
    return active_users;
}
   


module.exports={
    connection,
    get_active_users
}