import React from 'react';


const Navigation=({routechange})=>{

	return(

		<nav style={{textAlign:"right"}}>

			<div className='f3 underline black link dim pointer pa3' onClick={()=>routechange('Signin')}>Sign out</div>

		</nav>

		);

}
export default Navigation;