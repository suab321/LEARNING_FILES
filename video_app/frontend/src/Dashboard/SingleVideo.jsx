import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';
import VideoPlayer from 'simple-react-video-thumbnail'
import Axios from 'axios';

//developer made component imports//
import {backend} from '../url';
//ends//

class SingleVideo extends React.Component{
    constructor(props){
        super(props);

        this.video=React.createRef();

    }

    render(){
        const disp=this.props.details.myVideos.map(i=>{
            return(
                <div onClick={()=>{this.props.videoClicked(this.props.details,i)}} style={{display:`${this.props.type}`,padding:'4px 4px 4px 4px'}}>
                    <img style={{padding:'4px 4px 4px 4px'}} src={`${backend}/streaming/stream_filename/${i.thumbnail}`} alt={`${i}`} height="200px" width="200px"/>
                    <div>
                       <h2>{i.Title}</h2>
                       <p>{this.props.details.name}</p>
                    </div>
                </div>
            )
        })
        return(
            <div>
                {disp}
            </div>
        )
    }
}
export default SingleVideo