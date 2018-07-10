import React from 'react';
import axios from 'axios';


export default class Register extends React.Component{

constructor(props){
  super(props);
  this.state={
    name:"",
    email:"",
    password:""
  }
}
namechange=(event)=>{
  this.setState({name:event.target.value})
}

emailchange=(event)=>{
  this.setState({email:event.target.value})
}

passwordchange=(event)=>{
  this.setState({password:event.target.value})
}

onsubmit=()=>{
  axios.post('http://localhost:3000/register',{name:this.state.name,email:this.state.email,password:this.state.password})
  .then(response=>{
    if(response.status===400)
      alert("cannot register");
    else if(response.data){
      console.log(response.data);
      this.props.loadUser(response.data);
      this.props.routechange('home');
    }
  })
 }

  render(){
	return(
		<article className='br2 ba b--black-10 mv6 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
		<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">REGISTER</legend>
      <div className='mt3'>
      	<label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input onChange={this.namechange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name"/>
        </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.emailchange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.passwordchange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div>
      <input
      onClick={this.onsubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
      <div className='pa3'><div className='f3'>Have Account</div>
      <p onClick={()=>this.props.routechange('Signin')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type='submit'>SIGNIN</p>
      </div>
      </div>
    <div className="lh-copy mt3">
    </div>
  </div>
</main>
</article>
)
}
}


