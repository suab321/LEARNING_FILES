import React from 'react';
import io from 'socket.io-client';

export default class Socket_func extends React.Component{
    constructor(){
        super();
        this.socket=null;
        this.state={active_users:[]}
        this.connection=this.connection.bind(this);
        this.get_active_users=this.get_active_users.bind(this);
    }

    connection(port){
        var active_users=[];
        this.socket=io(port);
        this.socket.emit("user_connected",{id:localStorage.getItem('id')});
        this.socket.on("active_users",(data)=>{
            this.setState({active_users:data});
        });
    }
    
    get_active_users(){
        return (this.state.active_users);
    }
}
