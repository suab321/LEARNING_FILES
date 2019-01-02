import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import {Redirect} from 'react-router-dom';
import './friend.css';


class Friend_list extends React.Component{
    constructor(props){
        super(props);
        this.Search=this.Search.bind(this);
        this.state={data:[],profile_id:'',profile_pic:"",filtered_data:[]}
        axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
            if(res.status===200){
                axios.get('http://localhost:3002/get_all_user',{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                this.setState({data:res.data})
            })
          }
       })
       this.profile=this.profile.bind(this);
    }
    Search(event){
        const filtered_data=this.state.data.filter(user=>{
            if(user.name.toLowerCase().includes(event.target.value.toLowerCase()))
                return user;
        })
        console.log(filtered_data);
        this.setState({filtered_data:filtered_data});
        console.log(this.state.filtered_data);
    }
    profile(prop){
       this.setState({profile_id:prop.id,profile_pic:prop.profile_pic_id})
    }
    render(){
            if(this.state.data.length===0){
                return(
                    <div id='no_user'><h1>No users!!</h1></div>
            )
        }
        else{
            let display=[];
        if(this.state.filtered_data.length===0){
        display=this.state.data.map(user=>{
           return <Friend id={user.proid} profile_pic_id={user.profile_pic[user.profile_pic.length-1]} profile={this.profile}/>
       })
    }
    else{
        display=this.state.filtered_data.map(user=>{
            return <Friend id={user.proid} profile_pic_id={user.profile_pic[user.profile_pic.length-1]} profile={this.profile}/>
        })
    }
       
       if(this.state.profile_id===''){
        return(
            <div>
            <div id='search'>
                <input type='text' placeholder='Search friends' onChange={this.Search}/>
            </div>
            <div className='box'> {display}</div>
            </div>
        )
       }
       else{
           return(
           <Redirect to={`/profile/${this.state.profile_id}/${this.state.profile_pic}`} />
          )
       }
    }
  }
}
export default Friend_list;