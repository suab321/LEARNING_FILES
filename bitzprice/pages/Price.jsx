import React,{Component} from 'react'
import fetch from 'isomorphic-unfetch'


const Price=(props)=>{
		return(
			<div><p>{props.bpi.time.updated}</p></div>


			)
	}

Price.getInitialProps=async function(){
	const res=await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	const data=await res.json()

	return{
		bpi:data
	};
}


export default Price;