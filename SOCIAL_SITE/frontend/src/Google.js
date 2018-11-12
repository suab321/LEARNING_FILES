import React from 'react';
import axios from 'axios';
class Google extends React.Component{
    constructor(){
        super();
    }


    render(){
            axios.get("http://localhost:3002/user",{withCredentials:true}).then(res=>{
                axios.get("http://localhost:3002/name",{headers:{Authorization: `Bearer ${res.data}`}})
                .then(res=>console.log(res))
            })
        return(
            <div>
                <h1>LoggedIn</h1>
                <form method='POST' action="http://localhost:3002/upload/post" encType='multipart/form-data'>
                    <input type='file' name='file'/>
                    <button type='submit'>Upload</button>
                </form>
            </div>
        )
    }
}
export default Google;