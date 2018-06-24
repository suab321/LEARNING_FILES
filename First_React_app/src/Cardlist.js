import React from 'react';
import Card from './Card';

const Cardlist=({robots})=>{
	const cardparts=robots.map((i,index)=>{
		return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} key={robots[index].id}/>
	})
	return(
	<div>
		{cardparts}
	</div>
	);
}
export default Cardlist;