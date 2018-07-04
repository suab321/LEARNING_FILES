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

const app=new Clarifai.App({
	apiKey:'c774a5a94200444d8cfc475deb116e43'
});

class App extends Component {

  constructor(){
  	super()
  	this.state={
  		url:'',
  		value:'',
  		box:{},
  		route:"Signin"
  	};
  	this.face_value=this.face_value.bind(this);
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

  onButtonsubmit=()=>{
  	this.setState({url:this.state.value})
  	app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.url)
    .then(response=>this.display(this.face_value(response.outputs[0].data.regions[0].region_info.bounding_box)))
    .catch(err=>console.log(err))
}
    
  	


  render() {
    return (
      <div className="">
     	<Particles className="particles" />
        {
        this.state.route==='home'
        ?<div>
        <Navigation routechange={this.onroutechange}/>
        <Logo/>
        <Rank/>
        <Imagelinkform
        onTextchange={this.onTextchange}
        onButtonsubmit={this.onButtonsubmit}
        />
       <Image url={this.state.url} box={this.state.box}/>
       </div>
   		:(
   			this.state.route==='Signin'
   			?<Signin routechange={this.onroutechange}/>
   			:<Register routechange={this.onroutechange}/>
   		)
   		}
      </div>
    );
  }
}

export default App;

