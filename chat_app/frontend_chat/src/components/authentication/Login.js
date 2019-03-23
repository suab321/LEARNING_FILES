import React from 'react';
import {url} from '../url';
import axios from 'axios';

class Login extends React.Component{
    constructor(){
        super();
        axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
            console.log(res.data);
        })
    }

    render(){
        return(
           <div>
               <a href={`${url}/authentication/google`}><button>CLICK TO LOGIN VIA GOOGLE</button></a>
           </div>
        )
    }
}
export default Login;