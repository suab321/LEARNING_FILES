const io=require('socket.io-client');

var connected_socket;
const connection=(url)=>{
    connected_socket=io(`${url}`);
    connected_socket.emit('user_connected',{abhi:"hello"});
    connected_socket.on("Just_Uploaded_Video",(data)=>{console.log(data)});
}
const disconnect=()=>{
    console.log("disconnected");
    connected_socket.emit("disconnect");
}

const newUpload=(channels)=>{
    console.log(channels)
    connected_socket.emit("new_video_uploaded",channels);
}
module.exports={
    connection,
    disconnect,
    newUpload,
}