import React from 'react'
import {backend} from '../url';

class Login extends React.Component{


    render(){
        return(
        <div>
            <a href={`${backend}/authentication/clicked_login`}><button>Click to google login</button></a>
        </div>
        );
    }
}
export default Login;