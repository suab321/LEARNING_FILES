import React from 'react';
import './register.css';
import axios from 'axios';



class Register extends React.Component{
    constructor(props){
        super(props)
        this.register=this.register.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.cpassword=this.cpassword.bind(this)
        this.state={email:'',password:'',cpassword:'',err:1}
    }
    
    register(){
        if(this.state.password===this.state.cpassword)
            axios.post('http://localhost:3002/form/register',{email:this.state.email,password:this.state.password})
        else
        this.setState({err:0})


    }

    email(event){
        this.setState({email:event.target.value})
    }
    password(event){
        this.setState({password:event.target.value})
    }
    cpassword(event){
        this.setState({cpassword:event.target.value})
    }
    render(){
        return(
            <div>
            {
                (this.state.err)
                ?
                <div style={{textAlign:"center"}}>
				<div class='form'>
				<form method="POST" action='http://localhost:3002/form/register'>
				<label style={{fontSize: "2em"}}>REGISTER</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required onChange={this.email}/><br/><br/>
                <label>Username</label><br/><br/>
				<input type="text" name="name" required onChange={this.email}/><br/><br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required onChange={this.password}/><br/><br/>
                <label>Confirm Password</label><br/><br/>
				<input type="password" name="cpassword" required onChange={this.cpassword}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}}onClick={this.register}>Register</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<a href='/login'><button>Click to Login</button></a><br/><br/>
                <a href='http://localhost:3002/google/login'><button>Click to Login via Google</button></a>
				</div>
			</div>
            :(
                <div style={{textAlign:"center"}}>
				<div class='form'>
				<form method="POST" action='http://localhost:3002/form/register'>
				<label style={{fontSize: "2em"}}>REGISTER</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required="true"onChange={this.email}/><br/><br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required="true"onChange={this.password}/><br/><br/>
                <label>Password</label><br/><br/>
                <h1>Password dont match!</h1>
				<input type="password" name="cpassword" required="true"onChange={this.cpassword}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}}onClick={this.register}>Register</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<a href='/login'><button>Click to Login</button></a><br/><br/>
                <a href='http://localhost:3002/google/login'><button>Click to Login Via Google</button></a>
				</div>
                </div>
            )
            }

            </div>
        )
    }
}
export default Register;