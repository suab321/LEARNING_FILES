import React from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router';
const {url}=require('../url');

class LoggedIn extends React.Component{
    constructor(){
        super();
        this.state={redirect:0}
        Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            if(res.status === 200 || 304){
               Axios.get(`${url}/services/user_id`,{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                   if(res.status === 200 || 304){
                       localStorage.setItem('id',res.data);
                       this.setState({redirect:1});
                   }
               })
            }
        })
    }
    render(){
        if(this.state.redirect){
            return (<Redirect to="/friends"/>)
        }
        else{
            return (
                <div></div>
            )
        }
    }
}

export default LoggedIn;