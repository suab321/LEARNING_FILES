import React from 'react';
import axios from 'axios';
const Google=()=>{
    let name="";
    axios.get("http://localhost:3002/user",{withCredentials:true}).then(res=>{
        console.log(res.data)
      axios.get('http://localhost:3002/name',{headers: { Authorization: `Bearer ${res.data}`}})
      .then(res=>name=res.data.user.user)
    })
    console.log(name)
    return(
        <div>
            <h1>{`LoggedIn ${name}`}</h1>
        </div>

    )
}
export default Google;