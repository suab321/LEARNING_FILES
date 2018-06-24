import React from 'react';


const Card=({id,email,name})=>{
	return(

			<div className='tc bg-light-green dib br3 pae ma2 grow shadow-5'>
			<img src={`https://robohash.org/g${id}`} alt="robots"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
			</div>
		);
}

export default Card;