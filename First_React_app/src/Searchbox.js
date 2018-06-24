import React from 'react';

const Searchbox=({change})=>{

	return(
			<div className={'tc pa2'}>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type="Search" 
				placeholder="Search robots"
				onChange={change}/>

			</div>
		)
}
export default Searchbox;