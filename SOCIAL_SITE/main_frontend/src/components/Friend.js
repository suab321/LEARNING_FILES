import React from 'react';
import './friend.css';
import axios from 'axios';

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state={name:''}
    }
    render(){
        axios.get(`http://localhost:3002/get_name/${this.props.id}`).then(res=>{
            this.setState({name:res.data})
        })
        return(
            <div className='inside'>
            <img id='profile' src={`http://localhost:3002/image/get_profile_image/${this.props.profile_pic_id}`}_/>
            <h3 onClick={()=>this.props.profile(this.props)} className='name'>{this.state.name}</h3>
            <br/>
            </div>
        )
        }
}
export default Friend;