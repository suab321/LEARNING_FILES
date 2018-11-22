import React from 'react';
import axios from 'axios';

class Form extends React.Component{

    constructor(){
        super();
        this.logout=this.logout.bind(this.logout);
    }

    logout(){
        console.log("logout");
        axios.get("http://localhost:3002/form/logout");
    }

    
    render(){

    axios.post("http://localhost:3002/form/login",{email:"workfor9051571833@gmail.com",password:"123"},{withCredentials:true}).then(res=>{
        if(res.status===200){
            axios.get("http://localhost:3002/user",{withCredentials:true}).then(res=>{
                axios.get("http://localhost:3002/name",{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
                    console.log(res);
                })
            })
        }
    })

    return(
        <div>
            <h1>LoggedIn</h1>
            <button onClick={this.logout}>Log Out</button>
        </div>
    )
}
}
export default Form;