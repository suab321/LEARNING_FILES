import React from 'react';
import './profile_page.css';

class Profile_page_other extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.params.profile_image)
        return(
            <div id='profile_box'>
                <img src={`http://localhost:3002/image/get_profile_image/${this.props.match.params.profile_image}`} height='200px' width='200px'/>
                <h3>{this.props.match.params.name}</h3>
            </div>
        )
    }
}
export default Profile_page_other;