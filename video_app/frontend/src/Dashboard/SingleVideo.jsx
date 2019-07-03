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

        this.getImage=this.getImage.bind(this);
    }
    getImage(){

    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default SingleVideo