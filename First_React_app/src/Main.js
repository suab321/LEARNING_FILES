import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from'./Scroll';


class Main extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}))
	}

	Searchchange=(event)=>{
		this.setState({searchfield:event.target.value})

	}
	render(){
		const filteredrobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return(
				<div className={'tc bg-light-yellow'}>
					<h2>ROBOS</h2>
					<Searchbox change={this.Searchchange}/>
					<Scroll>
						<Cardlist robots={filteredrobots}/>
					</Scroll>
					</div>
			);
	}
}

export default Main;