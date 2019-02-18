
import Noty from 'noty'

export default class SocketHandler extends React.Component{

    constructor(){
        super();
        this.handle_chat=this.handle_chat.bind(this);
    }
   
    handle_chat(io){
        var socket=io.connect("http://localhost:3002")
        console.log(socket);
        socket.emit("msg",{msg:"hey server"});
        socket.on("msg",msg=>{
            console.log(msg);
            new Noty({
                type:"success",
                layout:"topRight",
                text:"mvshvb",
                timeout:3000
            }).show()
        }
        );

    }

}
