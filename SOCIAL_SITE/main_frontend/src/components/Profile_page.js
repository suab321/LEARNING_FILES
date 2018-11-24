import React from 'react';

class Profile_page extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.match.params.name}</h1>
            </div>
        )
    }
}
export default Profile_page;