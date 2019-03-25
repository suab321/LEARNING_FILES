import React from 'react'
import S_friend from './S_friend';
import {Redirect} from 'react-router';
import Axios from 'axios';
import {url} from '../url';
import io from 'socket.io-client';
import Chat from '../chat_page/Chat';


class Friendlist extends React.Component{
    constructor(props){
        super(props);
        this.chatpage_obj=new Chat();
        this.state={redirect:null,users:[],active_users:[]};
        this.clicked=this.clicked.bind(this);
        this.socket=null;
        this.send_message=this.send_message.bind(this);
        this.connection=this.connection.bind(this);
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            if(res.status === 200 || 304){
                Axios.get(`${url}/services/user_list`,{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    if(res.status === 200 || 304)
                        this.setState({users:res.data});
                        this.connection(`${url}`);
                        console.log(this.state.active_users);
                        console.log(this.state.users);
                })
            }
        })
    }

    send_message(message){
        this.socket.emit('new_message_sender',message);
        console.log(message);
    }

    connection(port){
        this.socket=io(port);
        this.socket.emit("user_connected",{id:localStorage.getItem('id')});
        this.socket.on("active_users",(data)=>{
            this.setState({active_users:data});
        });
        this.socket.on('new_message_recevier',message=>{
            this.chatpage_obj.message_recevied(message);
        });
    }
    

    clicked(detail){
        this.setState({redirect:detail});
    }

    render(){
        console.log(this.state.active_users);
        var user_id=this.state.active_users.map(i=>{return i.user_id});
        console.log(user_id);
        var activeUsers=this.state.users.filter(i=>{
            if(user_id.indexOf(i._id) !== -1)
                return i;
        })
        console.log(activeUsers);
        const display=activeUsers.map(i=>{
                return <S_friend details={i} clicked={this.clicked}/>
        })
        if(!this.state.redirect){
        return(
            <div>
                {display}
            </div>
        )
        }
        else{
            return(
                <div>
                    <Redirect to={{
                        pathname:'/chatpage',
                        state:this.state.redirect
                    }}/>
                </div>
            )
        }
    }
}
export default Friendlist;