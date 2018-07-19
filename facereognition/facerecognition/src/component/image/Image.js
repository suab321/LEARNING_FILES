import React from 'react';
import './Image.css';

const Image=({url,box})=>{
	return(
			<div className='absolute'>
				<img src={url} alt="" height="auto" width="500px" id='image'/>
				<div id='img' className='bounding-box' style={{top:box.toprow,right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}>
				</div>
			</div>
		)
}
export default Image;