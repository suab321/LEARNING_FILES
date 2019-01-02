export default class SocketHandler{
   
    handle_chat(socket){
        console.log(socket);
        socket.on("connection",(socket)=>{console.log("connected")});
        socket.emit("msg",{from:"client",to:"server",msg:"Hey server"});
    }
}
