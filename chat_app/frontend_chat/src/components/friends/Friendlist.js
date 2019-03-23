import React from 'react'
import S_friend from './S_friend';
import {Redirect} from 'react-router';
import Axios from 'axios';
import {url} from '../url';
import Socket_fucn from '../sockets/Socket_fucn';

class Friendlist extends React.Component{
    constructor(props){
        super(props);
        this.state={redirect:null,users:[]};
        this.clicked=this.clicked.bind(this);
        this.state={users:[]}
        this.handle_socket=null;
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            if(res.status === 200 || 304){
                Axios.get(`${url}/services/user_list`,{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    if(res.status === 200 || 304)
                        this.setState({users:res.data});
                        this.handle_socket=new Socket_fucn();
                        this.handle_socket.connection(`${url}`);
                })
            }
        })
    }
    

    clicked(detail){
        this.setState({redirect:detail});
    }

    render(){
        console.log(this.state.users);

        const display=this.state.users.map(i=>{
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