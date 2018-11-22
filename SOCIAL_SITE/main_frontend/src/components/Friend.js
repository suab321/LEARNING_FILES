import React from 'react';
import './friend.css';

const Friend=(props)=>{
    return(
    <div className='inside'>
    <img src='qjqdjk' height='200px' width='200px' alt={props.id}/>
    <h3>name</h3>
    <br/>
    </div>
    )
}
export default Friend;