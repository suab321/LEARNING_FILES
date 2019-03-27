import React from 'react';
import Axios from 'axios';
const {backend}=require('../url');

export default class Admin_dashboard extends React.Component{
    constructor(){
        super();
        this.state={name:"",data:null}
        Axios.get(`${backend}/services/info`).then(res=>{
            if(res.status === 200)
                console.log(res.data);
        })
        
    }

    render(){
        return(
            <div>hey</div>
        )
    }
}