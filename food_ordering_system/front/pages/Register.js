import React,{Component} from 'react'
import axios from 'axios'
import Link from 'next/link'


class Register extends Component{
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
            axios.post('http://localhost:3002/register',{email:this.state.email,password:this.state.password})
        else
        this.setState({err:0})


    }

    email(){
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
				<form method="POST" action='http://localhost:3002/register'>
				<label style={{fontSize: "2em"}}>REGISTER</label><br/><br/><br/>
				<img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG" alt="" width="200px" height="200px"/><br/><br/>
				<label>Email</label><br/><br/>
				<input type="email" name="email" required onChange={this.email}/><br/><br/>
				<label>Password</label><br/><br/>
				<input type="password" name="password" required onChange={this.password}/><br/><br/>
                <label>Confirm Password</label><br/><br/>
				<input type="password" name="cpassword" required onChange={this.cpassword}/><br/><br/>
				<button style={{cursor: "pointer",fontSize: "1em"}}onClick={this.register}>Register</button><br/><br/>
				<p style={{fontFamily: "sans-serif"}}>Dont Have an Account!</p>
				</form>
				<form action='/register_page' method="GET">
				<Link href='/Login'><button style={{cursor:"pointer"}}>Click to Login</button></Link>
				</form>
				</div>
			</div>
            :(
                <div style={{textAlign:"center"}}>
				<div class='form'>
				<form method="POST" action='http://localhost:3002/register'>
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
				<form action='/register_page' method="GET">
				<Link href='/Login'><button style={{cursor:"pointer"}}>Click to Login</button></Link>
				</form>
				</div>
                </div>
            )
            }
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
export default Register;