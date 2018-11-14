import React from 'react';
import './register.css';
import axios from 'axios'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.login=this.login.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.state={email:'',password:'',err:1}
    }
    
    login(){
            axios.post('http://localhost:3002/form/login',{email:this.state.email,password:this.state.password})
    }

    email(event){
        this.setState({email:event.target.value})
    }
    password(event){
        this.setState({password:event.target.value})
    }
    
    render(){
        return(
            <div>
            
                <div style={{textAlign:"center"}}>
				<div class='form'>
				<form method="POST" action='http://localhost:3002/form/login'>
				<label style={{fontSize: "2em"}}>REGISTER</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required onChange={this.email}/><br/><br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required onChange={this.password}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}}onClick={this.login}>Login</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<a href='/register'><button>Click to Register</button></a><br/><br/>
                <a href='http://localhost:3002/google/login'><button>Click to Login via Google</button></a>
				</div>
			    </div>
            </div>
        )
    }
}
export default Login;