
//developer made imports//
const {decodeToken}=require('../jwt/jwt')

var io,connected_socket;
var active_users=[];//conatins object in format {id:'',token:''}
var connected_session_tokens=[];
function connection(io){
    io.on('connection',socket=>{
        if(!decodeToken((String)(socket.request.session.user))){
            console.log('invalid connection');
            socket.disconnect();
        }
        else{
            connected_socket=socket;
        connected_socket.on("user_connected",(data)=>{
            if(connected_session_tokens.indexOf(connected_socket.request.session.passport.user) === -1){
                connected_session_tokens.push(connected_socket.request.session.passport.user);
                active_users.push({id:connected_socket.id,token:connected_socket.request.session.passport.user});
                console.log("When new connection established");
                console.log(active_users);
                console.log(connected_session_tokens);
            
        }});

        connected_socket.on('disconnect',()=>{
            active_users=active_users.filter(i=>{
                if(i.id === socket.id){
                    console.log("Socket to be deleted "+i.id);
                    connected_session_tokens.splice(connected_session_tokens.indexOf(i.token),1);
                }
                else
                    return i;
                    
            })
            console.log(active_users);
            console.log(connected_session_tokens)    
        })
        connected_socket.on("new_video_uploaded",(data)=>{
            console.log(data.channelSubscribed);
            active_users.map(i=>{
                let index=data.channelSubscribed.indexOf(i.token);
                if(index !== -1){
                    console.log(i);
                    io.to(i.id).emit("Just_Uploaded_Video",{msg:`${data.name} just uploaded a new video`})
                }
            })
        })
    }

    })
}


module.exports={
    connection,
}