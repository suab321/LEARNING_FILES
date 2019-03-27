import React from 'react'
import Axios from 'axios';
import Friendlist from '../friends/Friendlist';


const {url}=require('../url');

class Chat extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={message:[{key:"",msg:""}]}
        this.send_message=this.send_message.bind(this);
        this.mychat=React.createRef();
        this.message_recevied=this.message_recevied.bind(this);
    }
    componentDidMount(){
        this.handlsocket=new Friendlist();
    }

    send_message(){
        var arr=this.state.message;
        this.handlsocket.send_message({msg:this.mychat.current.value,to:this.props.location.state._id});
        arr.push({msg:this.mychat.current.value,key:"my"});
        this.setState({message:arr});
    }

    message_recevied(message){
        var arr=this.state.message;
        arr.push({msg:message.msg,key:"h"});
        console.log(arr);
        this.setState({message:arr});
    }

    render(){
        console.log(this.state.message);
        const message_display=this.state.message.map(i=>{
            if(i.key === "my"){
            return(
                <div>
                    <h4>{i.msg}</h4>
                </div>
            )
            }
            else{
                return(
                    <div>
                        <h4 style={{backgroundColor:"rgb(122,45,98)"}}>{i.msg}</h4>
                    </div>
                )
            }
        })
        return(
            <div>
                <div style={{backgroundColor:"green",textAlign:"center",padding:"3% 0"}}>{this.props.location.state.name}</div>
                <div style={{textAlign:"center"}}>{message_display}</div>
                <div style={{marginTop:'30em',paddingLeft:'40%'}}>
                    <input ref={this.mychat} type="text"/>
                    <button onClick={this.send_message}>Send</button>
                </div>
            </div>
        )
    }
}

export default Chat;