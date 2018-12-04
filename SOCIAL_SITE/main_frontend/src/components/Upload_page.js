import React from 'react';
import './upload.css';
import axios from 'axios';

class Upload_page extends React.Component{
    constructor(props){
        super(props);
        this.handlefile=this.handlefile.bind(this)
        this.submit=this.submit.bind(this)
        this.state={file:null,err:0}
    }
    handlefile(e){
        const image_name=e.target.files[0].name.split('.')[1];
        const includes=['jpeg','jpg','png'];
        if(!includes.includes(image_name))
            this.setState({err:1})
        else
            this.setState({err:0})
        this.setState({file:e.target.files[0]})
        console.log(this.state.file)
        console.log(this.state.err)
    }
    submit(){
        let formdata=new FormData();
        formdata.append('file',this.state.file);
            axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
                if(res.status===200){
                    axios.post('http://localhost:3002/upload/profile_pic',{file:formdata},
                    {headers:{Authorization: `Bearer ${res.data}`}}).then(res=>console.log(res))
                }
            })
        }

    render(){
        if(!this.state.err){
        return(
            <div id='file_main'>
                <div encType='multipart/form-data'>
                    <img src={`http://localhost:3002/image/profile_image`} height='200px'width='85%'/>
                    <input id='image_file' type='file' name='file' required onChange={this.handlefile}/>
                    <button type='submit' onClick={this.submit}>Upload</button>
                </div>
            </div>
        )
    }
    else{
        return(
        <div id='file_main'>
        <form encType='multipart/form-data'>
            <img src={`http://localhost:3002/image/profile_image`} height='200px'width='85%'/>
            <h3>Enter Image file only</h3>
            <input id='image_file' type='file' name='file' required onChange={this.handlefile}/>
        </form>
    </div>
        )

    }
}
}
export default Upload_page;