import React from 'react';
import {Button, Alert} from 'react-bootstrap';


//developer made imports//
import {backend,frontend} from '../url';
import Axios from 'axios';
import NavigationBar from '../Dashboard/NavigationBar';
//ends//

class Upload extends React.Component{
    constructor(){
        super();

        this.Thumb=React.createRef();
        this.Video=React.createRef();
        this.description=React.createRef();
        this.Title=React.createRef();

        this.state={
            isCorrectFile:false,
            isThumbUpload:false,
            error:true
        }

        this.fileLoaded=this.fileLoaded.bind(this);
        this.thumbLoaded=this.thumbLoaded.bind(this);
        this.upload=this.upload.bind(this);
    }

    thumbLoaded(){
        let string=this.Thumb.current.files[0];
        if(string.name.split('.')[string.name.split('.').length-1] === "png" || string.name.split('.')[string.name.split('.').length-1] === "jpg" || string.name.split('.')[string.name.split('.').length-1] === "jpeg")
            this.setState({isThumbUpload:true});
        else
            alert("Thumbail should be in png jpeg or jpg");
    }

    fileLoaded(){
        let string=this.Video.current.files[0];
        if(string.name.split('.')[1] === "mp4")
            this.setState({isCorrectFile:true})
        else
            alert("Upload file with .mp4 extension");
    }

    async upload(){
        console.log(this.description.current.value);
        let formdata1=new FormData();
        formdata1.append('file',this.Thumb.current.files[0]);

        let formdata2=new FormData();
        formdata2.append("file",this.Video.current.files[0]);
        try{
            let data1=await Axios.post(`${backend}/video_service/upload_thumbnail`,formdata1,{withCredentials:true});
            let data2=await Axios.post(`${backend}/video_service/upload`,formdata2,{withCredentials:true});
            let data3=await Axios.post(`${backend}/video_service/video_details`,
                        {thumbnail:data1.data.msg,video_id:data2.data.msg,
                        Title:this.Title.current.value,Description:this.description.current.value},
                        {withCredentials:true});
                        this.setState({error:false})
            }catch(err){
                alert("you got error in uploading video")
            }

    }

    render(){
        return(
            <div>
                <Alert hidden={this.state.error} variant='success'>Video uploaded Successfully</Alert>
                <input type="file" ref={this.Video} onChange={this.fileLoaded}/><br/>
                <textarea placeholder="Video Title" ref={this.Title}></textarea><br/>
                <textarea placeholder="Description" ref={this.description}></textarea><br/>
                <div hidden={!this.state.isCorrectFile}>
                    <input type="file" ref={this.Thumb} onChange={this.thumbLoaded}/>
                    <img hidden={!this.isThumbUpload} src={this.state.image} alt={1}/>
                    <Button hidden={!this.state.isThumbUpload}>Click to see How it looks</Button>
                </div>
                <Button onClick={this.upload} hidden={!this.state.isCorrectFile} onChange={this.thumbLoaded}>Upload</Button>
            </div>
        )
    }
}
export default Upload;