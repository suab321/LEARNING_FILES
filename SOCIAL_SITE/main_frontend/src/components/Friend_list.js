import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import {Redirect} from 'react-router-dom';
import './friend.css';


class Friend_list extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[],profile_name:'',profile_image_id:''}
        axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
            if(res.status===200){
                axios.get('http://localhost:3002/get_all_user',{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                this.setState({data:res.data})
            })
          }
       })
       this.profile=this.profile.bind(this);
    }
    profile(id){
        console.log(this.state.profile_image_id)
        axios.get(`http://localhost:3002/get_name/${id.id}`)
        .then(res=>{this.setState({profile_name:res.data,profile_image_id:id.profile_pic_id})})
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
           <Redirect to={`/profile/${this.state.profile_name}/${this.state.profile_image_id}`} />
           )
       }
    }
}
export default Friend_list;