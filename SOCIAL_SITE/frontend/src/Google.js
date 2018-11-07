import React from 'react';
import axios from 'axios';
class Google extends React.Component{
    constructor(){
        super();
    }

    render(){
            axios.get("http://localhost:3002/google/user",{withCredentials:true}).then(res=>{
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