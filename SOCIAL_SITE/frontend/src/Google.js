import React from 'react';
import axios from 'axios';
class Google extends React.Component{
    constructor(){
        super();
    }

    logout(){
        console.log("logout");
        axios.get("http://localhost:3002/form/logout");
    }

    render(){
            axios.get("http://localhost:3002/user",{withCredentials:true}).then(res=>{
                axios.get("http://localhost:3002/name",{headers:{Authorization: `Bearer ${res.data}`}})
                .then(res=>console.log(res))
            })
        return(
            <div>
                <h1>LoggedIn</h1>
            </div>
        )
    }
}
export default Google;