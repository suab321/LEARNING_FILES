import React,{Component} from 'react';



export default class A extends React.Component{
	constructor(){
		super()
		this.state={"value":1}
	}

	toggle=()=>{
		(this.state.value===1)?this.setState({"value":2}):this.setState({"value":1})
	}

	render(){
		return(
			<div class='div'>
			<button class='button' onClick={this.toggle}>Toggle</button>
			{
				(this.state.value===1)?
			<div>
			<div>Hello State is 1</div>
			</div>
			:(
			<div>Hello State is 2</div>
			)
			}
			</div>
			)
	}
}