import React from 'react';


const Navigation=({routechange,onsignout})=>{

	

	return(

		<nav style={{textAlign:"right"}}>

			<div className='f3 underline black link dim pointer pa3' onClick={()=>{routechange('Signin');onsignout("")}}>Sign out</div>

		</nav>

		);

}
export default Navigation;