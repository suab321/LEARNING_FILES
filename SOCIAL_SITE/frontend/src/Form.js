import React from 'react';
import axios from 'axios';

const Form=()=>{
    axios.post("http://localhost:3002/form/login",{email:"singhabhinav0796@gmail.com",password:"1234"},{withCredentials:true}).then(res=>{
        if(res.status===200){
            axios.get("http://localhost:3002/login/user",{withCredentials:true}).then(res=>{
                axios.get("http://localhost:3002/name",{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    console.log(res);
                })
            })
        }
    })

    return(
        <div>
            <h1>LoggedIn</h1>
        </div>
    )
}
export default Form;