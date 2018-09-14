import React,{Component} from 'react'
import axios from 'axios'
import Link from 'next/link'
axios.defaults.withCredentials=true;

class Login extends Component{
    constructor(props){
        super(props)
        this.login=this.login.bind(this)
        this.state={email:'',password:''}
    }
    login(){
        axios.post('http://localhost:3002/login',{email:this.state.email,password:this.state.password})
    }
    email(event){
        this.setState({email:event.target.value})
    }
    password(event){
        this.setState({password:event.target.value})
    }

    render(){
        return(
            <div style={{textAlign:"center"}}>
			<div>
				<div class='form'>
				<form method="POST" action='http://localhost:3002/login'>
				<label style={{fontSize: "2em"}}>LOGIN</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required onChange={this.email}/><br/><br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required onChange={this.password}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}}onClick={this.login}>Login</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<form action='/register_page' method="GET">
				<Link href='/Register'><button style={{cursor:"pointer"}}>Click to Register</button></Link>
				</form>
				</div>
			</div>
            <style jsx>
            {`
            .form{
                border: 1px solid black;
                width:30em;
                padding: 5px;
                margin-left: 42em;
                margin-top: 5em;
                margin-right: 10em;
                text-align: center;
                padding-top: 1em;
                padding-bottom: 1em;
                background-color: rgb(149,78,87);
            }
            label{
                font-size: 1em;
                font-family: sans-serif;
            }
            input{
                font-size: 1.5em;
                text-align: center;
            }
            `}
            </style>
			</div>
        )
    }
}
export default Login;