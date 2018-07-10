import React,{Component} from 'react';
import axios from 'axios';

  export default class Signin extends Component {

    constructor(props){
      super(props);
      this.state={
        email:"",
        password:""
      };
    }

    onEmailchange=(event)=>{
      this.setState({email:event.target.value})
    }

    onPasswordchange=(event)=>{
      this.setState({password:event.target.value})
    }

    onSubmit=()=>{
      axios.post('http://localhost:3000/signin',{email:this.state.email,password:this.state.password})
      .then(response=>{
        if(response.status===200){
          this.props.loadUser(response.data)
          this.props.routechange('home');
        }
        else if(response.status===400)
          this.props.buildalert("nr");
        else if(response.status===500)
          this.props.buildalert("prob");
      })
      
}              

   render(){
	return(
		<article className='br2 ba b--black-10 mv6 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
		<main className ="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailchange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPasswordchange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div>
      <p
      onClick={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" value="Signin">Sign In</p>
    </div>
    <div className="pa3"><div className='f3'>Dont have a account?</div>
      <p onClick={()=>this.props.routechange('register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type='submit'>Register</p>
    </div>
  </div>
</main>
</article>
)
}
}
