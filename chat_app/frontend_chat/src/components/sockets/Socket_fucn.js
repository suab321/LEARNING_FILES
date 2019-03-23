import React from 'react';
import io from 'socket.io-client';

export default class Socket_func extends React.Component{
    constructor(){
        super();
        this.connection=this.connection.bind(this);
    }

    connection(port){
        const socket=io(port);
        socket.emit("my_id",{user_id:localStorage.getItem('id')});
        socket.on("active_users",data=>{
            console.log(data);
        })
    }
    
}
