import React from 'react';
import './Image.css'

const Imagelinkform=({onTextchange,onButtonsubmit,id})=>{

	return(
	<div>
			<p className='center  f3'>{'This magic brain will detect your face! Give it a try'}</p>
		<div className=' center flex '>
			<div className='form center pa3 br3 shadow-5'><input type='text' className='f4 pa2 w-70 center' onChange={onTextchange} />
			<button className='w-5 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonsubmit}>Detect</button></div>
		</div>
	</div>




		);


}
export default Imagelinkform;