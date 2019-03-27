import React from 'react';
import './admin_login.css';
import Axios from 'axios';
import {Redirect} from 'react-router'

const {backend}=require('../url');

class Admin_login extends React.Component{
    constructor(){
        super();
        this.state={redirect:false}
        this.Email=React.createRef();
        this.Password=React.createRef();
        this.submit=this.submit.bind(this);
    }

    submit(){
            Axios.post(`${backend}/authentication/admin/login`,{Email:this.Email.current.value,Password:this.Password.current.value}).then(res=>{
           if(res.status === 200){
               localStorage.setItem('Role','admin');
               this.setState({redirect:true});
           }
       })
    }

    render(){
        if(!this.state.redirect){
        return(
                <div style={{textAlign:"center"}}>
                <div class='form'>
                <div>
                <label style={{fontSize: "2em"}}>AdminLogin</label><br/><br/><br/>
                <img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
                <label>Email</label><br/><br/>
                <input type="email" ref={this.Email} name="email" required/><br/><br/>
                <label>Password</label><br/><br/>
                <input type="password" ref={this.Password} required /><br/><br/>
                <button onClick={this.submit} style={{cursor: "pointer",fontSize: "1em"}}>Login</button><br/><br/>
                </div>
                <a href="/developers_login" style={{cursor: "pointer",fontSize: "1em"}}>Are You Developer</a><br/><br/>
                </div>
                </div>
        )
        }
        else{
            return(
                <Redirect to="/admin/dashboard"/>
            )
        }
    }
}

export default Admin_login;