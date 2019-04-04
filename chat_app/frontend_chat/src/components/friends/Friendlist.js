
import React from 'react'
import S_friend from './S_friend';
import Axios from 'axios';
import {url} from '../url';
import io from 'socket.io-client';



class Friendlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect:null,
            users:[],
            token:null,
            active_users:[],
            messages:[{}],
            new_messages:[],
            create_group:false,
            group_member:[]
        };
        
        this.socket=null;
        this.mychat=React.createRef();
        this.group_name=React.createRef();

        this.clicked=this.clicked.bind(this);
        this.closebox=this.closebox.bind(this);
        this.send_message=this.send_message.bind(this);
        this.connection=this.connection.bind(this);
        this.create_group=this.create_group.bind(this);
        this.close_create_group=this.close_create_group.bind(this);

        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            if(res.status === 200 || 304){
                this.setState({token:res.data});
                Axios.get(`${url}/services/user_list`,{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    if(res.status === 200 || 304){
                        this.setState({users:res.data});
                        this.connection(`${url}`);
                        console.log(this.state.active_users);
                    }
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

        console.log(this.state.messages);
        console.log(this.state.new_messages);
        console.log(this.state.new_messages);

        if(this.state.new_messages.length){
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
            Axios.post(`${url}/services/save_chat`,{data:this.state.new_messages,to:this.state.redirect._id},{headers:{Authorization: `Bearer ${user.data}`}});
            this.setState({messages:[],new_messages:[],redirect:null});
        })
    }
    else
        this.setState({messages:[],new_messages:[],redirect:null});
    }

    send_message(){
        var message={msg:this.mychat.current.value,to:this.state.redirect._id,from:localStorage.getItem('id')}
        this.socket.emit('new_message_sender',message);
        var arr=this.state.messages;
        var arr_for_new=this.state.new_messages;
        arr.push({msg:message.msg,key:'my'});
        arr_for_new.push({msg:message.msg,key:'my'});
        this.setState({messages:arr,new_messages:arr_for_new});
        console.log(message);
        this.mychat.current.value="";
    }

    create_group(){
        this.setState({create_group:true});
    }

    close_create_group(){
        console.log(this.state.group_member);
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            Axios.post(`${url}/services/create_group`,{data:this.state.group_member,name:this.group_name.current.value},{headers:{Authorization: `Bearer ${res.data}`}})
            .then(user=>{
                this.group_name.current.value="";
                this.setState({create_group:false,group_member:[]})
            })
        })
        
    }

    connection(port){
        this.socket=io(port);
        this.socket.emit("user_connected",{id:localStorage.getItem('id')});

        this.socket.on("active_users",(data)=>{
            this.setState({active_users:data});
        });
        this.socket.on('new_message_recevier',message=>{
            console.log(message);
            if(this.state.redirect && this.state.redirect._id === message.from ){
            var arr=this.state.messages;
            var arr_for_new=this.state.new_messages;
            arr.push({msg:message.msg,key:'h'});
            arr_for_new.push({msg:message.msg,key:'h'});
            this.setState({messages:arr,new_messages:arr_for_new});
            }
            else{
                var m={msg:message.msg,key:'h'};
                Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
                    Axios.post(`${url}/services/save_chat`,{data:m,to:message.from},{headers:{Authorization: `Bearer ${user.data}`}});
                })
            }
        });
    }

    

    clicked(detail){
        console.log(this.state.create_group);
        if(!this.state.create_group){
       if(this.state.new_messages.length){
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
            Axios.post(`${url}/services/save_chat`,{data:this.state.new_messages,to:this.state.redirect._id},{headers:{Authorization: `Bearer ${user.data}`}});
            this.setState({messages:[],new_messages:[],redirect:detail});
            Axios.post(`${url}/services/get_chats`,{h_id:detail._id},{headers:{Authorization: `Bearer ${user.data}`}}).then(res=>{
                this.setState({messages:res.data});
            })
        })
        }
       else{
       this.setState({messages:[],new_messages:[],redirect:detail});
       Axios.get(`${url}/services/info`,{withCredentials:true}).then(user=>{
           Axios.post(`${url}/services/get_chats`,{h_id:detail._id},{headers:{Authorization: `Bearer ${user.data}`}}).then(res=>{
               this.setState({messages:res.data});
           })
       })
    }
    }
    else{
        var arr=this.state.group_member;
        var arr_id=arr.map(i=>{return i._id});
        if(arr_id.indexOf(detail._id) === -1){
            arr.push({name:detail.name,user_id:detail._id});
            this.setState({group_member:arr});
        }
        else{
            arr=this.state.group_member.filter(i=>{
                if(i.user_id !== detail._id)
                    return i;
            })
            this.setState({group_member:arr});
        }
    }
}

    render(){
        var user_id=this.state.active_users.map(i=>{return i.user_id});
        const display=this.state.users.map(i=>{
            if(user_id.indexOf(i._id))
                return <S_friend details={i} clicked={this.clicked} active={true}/>
            else
                return <S_friend details={i} clicked={this.clicked} active={false}/>
        })
        if(!this.state.redirect){
            if(!this.state.create_group){
        return(
            <div>
                {display}
                <div style={{textAlign:"right",color:"rgb(21,43,56)"}}><button onClick={this.create_group}>Create Group</button></div>
            </div>
        )
        }
        else{
            const display_for_group=this.state.users.map(i=>{
                if(user_id.indexOf(i._id))
                    return <S_friend details={i} clicked={this.clicked} active={false} isgroup={true}/>
            })
            return(  
            <div>
                <h1>Members you want to include</h1>
                <input type="text" ref={this.group_name}/>
                {display_for_group}
                <button onClick={this.close_create_group}>Create</button>
            </div>
            )
        }
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
