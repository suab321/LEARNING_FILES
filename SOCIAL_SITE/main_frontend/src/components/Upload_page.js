import React from 'react';
import './upload.css';

class Upload_page extends React.Component{
    constructor(){
        super();
        this.state={err:1};
        this.handlefile=this.handlefile.bind(this);
    }
    handlefile(e){
        const format=['jpeg','jpg','png'];
        const ex=e.target.files[0].name.split('.')[1];
        if(format.includes(ex)){
            this.setState({err:0})
        }
    }

    render(){
        console.log(this.state.err)
        if(!this.state.err){
        return(
            <div id='file_main'>
                <form encType='multipart/form-data' method='POST' action="http://localhost:3002/upload/profile_pic">
                    <img src={`http://localhost:3002/image/profile_image`} height='200px'width='85%'/>
                    <input id='image_file' type='file' ref={(ref)=>this.file=ref} name='file' onChange={this.handlefile}/>
                    <button type='submit'>Upload</button>
                </form>
            </div>
        )
    }
    else{
        return(
        <div id='file_main'>
        <form encType='multipart/form-data' method='POST' action='multipart/form-data'>
            <img src={`http://localhost:3002/image/profile_image`} height='200px'width='85%'/>
            <h3>Enter Image file</h3>
            <input id='image_file' type='file' name='file' required onChange={this.handlefile}/>
        </form>
    </div>
        )

    }
}
}
export default Upload_page;