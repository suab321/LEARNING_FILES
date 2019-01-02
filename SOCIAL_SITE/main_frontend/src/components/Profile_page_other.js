import React from 'react';
import './profile_page.css';
import Axios from 'axios';

class Profile_page_other extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",profile_image:""};
        Axios.get(`http://localhost:3002/get_name/${this.props.match.params.id}`).then(res=>{
            this.setState({name:res.data});
        })
        Axios.get('http://localhost:3002/')
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div id='profile_box'>
                <img src={`http://localhost:3002/image/get_profile_image/${this.props.match.params.profile_image}`} height='200px' width='200px'/>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
export default Profile_page_other;