import React from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
    constructor(){
        super();
        this.state={redirect:false}
        Axios.get('http://localhost:3002/logout',{withCredentials:true}).then(res=>{if(res.status===200){this.setState({redirect:true})}});
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to='/login'/>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default Logout;