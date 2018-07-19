import React, { Component } from 'react';
import './App.css';
import Navigation from './component/navigation/Navigation';
import 'tachyons';
import Logo from './component/logo/Logo';
import Imagelinkform from'./component/imagelinkform/Imagelinkform';
import Rank from './component/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Image from './component/image/Image';
import 'tachyons';
import Signin from './component/signin/Signin';
import Register from './component/register/Register';
import axios from 'axios'

const app=new Clarifai.App({
	apiKey:'d9e65e14c6614d4e8ef63fec30e65671'
});

export default class App extends Component {

  constructor(){
  	super()
  	this.state={
  		url:'',
  		value:'',
  		box:{},
  		route:"Signin",
      user:{
        id:"",
      name:"",
      email:"",
      password:"",
      entries:0,
      joined_data:""
      }
  	};
  }

  onalertbuild=(text)=>{
    if(text==='nr')
      alert("Not");
  }

  onloadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      password:data.password,
      entries:data.entries,
      joined_data:data.joined_data
    }
  })
}

  face_value=(response)=>{
  	const image=document.getElementById('image')
  	const width=Number(image.width);
	const height=Number(image.height);
	return{
		leftcol:response.left_col*width,
		toprow:response.top_row*height,
		rightcol:width-(response.right_col*width),
		bottomrow:height-(response.bottom_row*height)
	}

  }
  onroutechange=(value)=>{
  	this.setState({route:value})
  }

  display=(info)=>{
  	this.setState({box:info})
  	console.log(this.state.box)
  }


  onTextchange=(event)=>{
  		this.setState({value:event.target.value})
  	}

  onSignOut=(value)=>{
    this.setState({url:value})
  }


  onButtonsubmit=()=>{
  	this.setState({url:this.state.value})
  	app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.url)
    .then(response=>{this.display(this.face_value(response.outputs[0].data.regions[0].region_info.bounding_box))})
    .catch(err=>console.log(err))
      axios.put('http://localhost:3000/image',{id:this.state.user.id})
      .then(response=>{
        this.setState({user:{
          id:this.state.user.id,
          name:this.state.user.name,
          email:this.state.user.email,
          password:this.state.user.password,
          entries:response.data,
          joined_data:this.state.user.joined_data
        }})
      })
    console.log(this.state.user.entries)
}
    
  	


  render() {
    return (
      <div>
     	<Particles className="particles" />
        {
        this.state.route==='home'
        ?<div>
        <Navigation routechange={this.onroutechange} onsignout={this.onSignOut}/>
        <Logo/>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <Imagelinkform
        onTextchange={this.onTextchange}
        onButtonsubmit={this.onButtonsubmit}
        />
       <Image url={this.state.url} box={this.state.box}/>
       </div>
   		:(
   			this.state.route==='Signin'
   			?<Signin routechange={this.onroutechange} loadUser={this.onloadUser} buildalert={this.onalertbuild}/>
   			:<Register routechange={this.onroutechange} loadUser={this.onloadUser}/>
   		)
   		}
      </div>
    );
  }
}

