import React from 'react'
import Axios from 'axios';
import Socket_fucn from '../sockets/Socket_fucn';

const {url}=require('../url');

class Chat extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.location.state);
    }
    render(){
        const message=[{key:"my",msg:"hey"},{key:"h",msg:"hey"},{key:"h",msg:"how u doing?"},{key:"my",msg:"fine"},{key:"my",msg:"what about you"},
                        {key:"h",msg:"fine"}]
        const message_display=message.map(i=>{
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
            </div>
        )
    }
}

export default Chat;