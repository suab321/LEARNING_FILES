import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import {Redirect} from 'react-router-dom';
import './friend.css';


class Friend_list extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[],profile_name:0}
        axios.get('http://localhost:3002/get_all_user',{withCredentials:true}).then(res=>{
           this.setState({data:res.data})
           this.profile=this.profile.bind(this);
       })
    }
    profile(id){
        console.log(id);
        axios.get(`http://localhost:3002/get_profile/${id}`,{headers: {AccessControlAllowOrigin: 'http://localhost:3000'}})
        .then(res=>{
            this.setState({profile_name:res.data});
        })
    }
    render(){
       const display=this.state.data.map(user=>{
           return <Friend id={user.proid} profile_pic_id={user.profile_pic[user.profile_pic.length-1]} profile={this.profile}/>
       })
       if(this.state.profile_name===''){
        return(
            <div className='box'>{display}</div>
        )
       }
       else{
           return(
           <Redirect to={`/profile/${this.state.profile_name}`} />
           )
       }
    }
}
export default Friend_list;