import React,{Component} from 'react'
import Index from './Index.jsx'


class Home extends Component{
	constructor(){
		super()
		this.state={route:'index'}
	}

	change=(route)=>{
		this.setState({route})
	}

	render(){
		return(
			<div>
			{
				(this.state.route==='home')
				?<div>Home</div>
				:(
					<div>
						<Index click={this.change}/>
					</div>
					)
			}
		</div>

			)
	}
}
export default Home;