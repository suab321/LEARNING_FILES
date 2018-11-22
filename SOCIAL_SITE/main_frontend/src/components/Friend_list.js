import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import './friend.css';

class Friend_list extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data=[1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
                const list=data.map((user)=>{
                    return <Friend id={user}/>
                })
        return(
          <div className='box'>{list}</div>
        )
    }
}
export default Friend_list;