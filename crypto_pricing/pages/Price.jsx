import React,{Component} from 'react'
import Link from 'next/link'
import Router from 'next/router'

class Price extends Component{
	constructor(props){
		super(props)
		this.state={cry:'bit',value:'usd'}
	}


	render(){
		return(
			<div style={{textAlign:'center'}}>
				<select style={{margin:'2em'}}  >
				 <Link href='/usd.jsx'><option value='usd'>USD</option></Link>
				 <option value='eu'>EURO</option>
				 <option value='inr'>INR</option>
				 <Link href='/usd'><button>ada</button></Link>
				</select>


				<select >
					<option value='bit'>Bitcoin</option>
					<option value='eth'>Etherum</option>
					<option value='lit'>Liteocincoin</option>
					<option value='xrp'>Xrp</option>
				</select>
			</div>
			)
	}
}


export default Price