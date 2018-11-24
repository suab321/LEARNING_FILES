import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import './friend.css';


class Friend_list extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[]}
        axios.get('http://localhost:3002/get_all_user',{withCredentials:true}).then(res=>{
           this.setState({data:res.data})
       })
    }
    profile(id){
        console.log(id);
        axios.get(`http://localhost:3002/get_profile/${id}`,{headers: {AccessControlAllowOrigin: '*'}})
    }
    render(){
       const display=this.state.data.map(user=>{
           
           return <Friend id={user.proid} profile_pic_id={user.profile_pic[user.profile_pic.length-1]} profile={this.profile}/>
       })
        return(
            <div className='box'>{display}</div>
        )
    }
}
export default Friend_list;