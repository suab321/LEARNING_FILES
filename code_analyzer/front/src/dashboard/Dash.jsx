import React from 'react';
import Axios from 'axios';

const {server_link}=require('../url')


class Dash extends React.Component{
    constructor(){
        super();
        this.file_ref=React.createRef();
        this.code_ref=React.createRef();
        this.upload=this.upload.bind(this);
        this.state={
            config:{headers:{'content-type':'multipart/formdata'}},
            code:''
        }
    }

    async upload(){
        let file=this.file_ref.current.files[0];
        let fd=new FormData();
        fd.append('file',file);
        let res=await Axios.post(`http://localhost:3002/file/get_thumbnail`,fd,this.state.config);
        this.setState({code:res.data});        
    }

    render(){
        console.log(this.state.code);
        return(
            <div>
                <textarea rows="25" col="500" value={this.state.code}></textarea>
                <input type="file" ref={this.file_ref}/>
                <button onClick={this.upload}>upload</button>
            </div>
        )
    }
}

export default Dash;