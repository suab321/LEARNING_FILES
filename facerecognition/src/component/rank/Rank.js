import React from 'react';


const Rank=({name,entries})=>{
	return(
		<div>
		<div className='f1 white ceenter' >{`${name}`}</div>
		<div className='f3 white center'>welcome back your entry count is
		</div>
		<div className='f1 white center'>{`${entries}`}
		</div>
		</div>
		
		);
}

export default Rank;