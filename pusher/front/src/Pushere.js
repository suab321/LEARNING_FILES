import React from 'react';
import Pusher from 'pusher-js';

class Pushere extends React.Component{
    constructor(){
        super();
        this.activate=this.activate.bind(this);
    }
    async activate(){
        Notification.requestPermission();
     const socket=new Pusher('bab650d7f5b6e61246e9',{
         cluster:'ap2',
         authTransport:'jsonp'
     })
    // var channel=socket.subscribe(['notification','ch1','ch2']);
    var channel=socket.subscribe('notification');
    channel.bind('Notified',(data)=>{
        alert(data.abhi)
    })
    console.log(channel)
    }
    
    render(){
        return(<div></div>)
    }
}
export default Pushere;