import React from 'react';
import './profile_page.css';
import axios from 'axios';

class Profile_page_user extends React.Component{
    constructor(props){
        super(props);
        this.state={name:''};
        axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
            if(res.status===200){
                axios.get(`http://localhost:3002/name`,{headers:{Authorization: `Bearer ${res.data}`}})
                .then(res=>this.setState({name:res.data.user.name||res.data.user.user}));
            }
        })
    }
    render(){
        return(
            <div id='profile_box'>
                <img src={`http://localhost:3002/image/profile_image`} height='200px' width='200px'/>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
export default Profile_page_user;