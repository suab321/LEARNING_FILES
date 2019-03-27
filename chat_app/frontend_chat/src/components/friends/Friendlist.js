
import React from 'react'
import S_friend from './S_friend';
import Axios from 'axios';
import {url} from '../url';
import io from 'socket.io-client';



class Friendlist extends React.Component{
    constructor(props){
        super(props);
        this.state={redirect:null,users:[],active_users:[],messages:[{}]};
        this.clicked=this.clicked.bind(this);
        this.socket=null;
        this.closebox=this.closebox.bind(this);
        this.mychat=React.createRef();
        localStorage.setItem('chats',[]);
        this.send_message=this.send_message.bind(this);
        this.connection=this.connection.bind(this);
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            if(res.status === 200 || 304){
                Axios.get(`${url}/services/user_list`,{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    if(res.status === 200 || 304)
                        this.setState({users:res.data});
                        this.connection(`${url}`);
                        console.log(this.state.active_users);
                })
            }
        })
    }

    componentWillUnmount(){
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
            Axios.post(`${url}/services/save_chat`,{data:this.state.messages,to:this.state.redirect._id},{headers:{Authorization: `Bearer ${user.data}`}});
        })
    }

    closebox(){
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
            Axios.post(`${url}/services/save_chat`,{data:this.state.messages,to:this.state.redirect._id},{headers:{Authorization: `Bearer ${user.data}`}});
        this.setState({messages:[]});
        this.setState({redirect:null})
        })
    }

    send_message(){
        var message={msg:this.mychat.current.value,to:this.state.redirect._id}
        this.socket.emit('new_message_sender',message);
        var arr=this.state.messages;
        arr.push({msg:message.msg,key:'my'});
        this.setState({messages:arr});
        console.log(message);
        this.mychat.current.value="";
    }

    connection(port){
        this.socket=io(port);
        this.socket.emit("user_connected",{id:localStorage.getItem('id')});

        this.socket.on("active_users",(data)=>{
            this.setState({active_users:data});
        });
        this.socket.on('new_message_recevier',message=>{
            console.log(message);
            var arr=this.state.messages;
            arr.push({msg:message.msg,key:'h'});
            this.setState({messages:arr});
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
            console.log(this.state.messages);
            const message_display=this.state.messages.map(i=>{
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
                    {display}
                <div style={{backgroundColor:"green",textAlign:"center",padding:"3% 0"}}>{this.state.redirect.name}
                <div style={{textAlign:'right',paddingRight:'5%'}}><h5 onClick={this.closebox}>Close</h5></div>
                </div>
                <div style={{marginTop:'3em',paddingLeft:'40%'}}>
                    <input ref={this.mychat} type="text"/>
                    <button onClick={this.send_message}>Send</button>
                </div>
                <div style={{textAlign:"center"}}>{message_display}</div>
                </div>
            )
        }
    }
}
export default Friendlist;
