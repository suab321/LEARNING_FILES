import React from 'react';
import {backend} from '../url';
import Axios from 'axios';

//developer made components import//
import NavigationBar from './NavigationBar';
import VideoPlayers from './VideoPlayer';
import Videos from './Videos';
//imports ends//

class Dashboard extends React.Component{
    constructor(){
        super();
        this.fileRef=React.createRef();
        
        this.getVideos=this.getVideos.bind(this);

        this.state={
            isFileCorrect:false,
            isUploadError:false,
            clickedVideo:false
        };

    }
    async getVideos(){
        let data=await Axios.get(`${backend}/video_service/get_videos_list`,{withCredentials:true});
        console.log(data.data);
    }
    render(){
        if(this.state.clickedVideo){
            return(
                <div>
                    <NavigationBar/>
                    <VideoPlayers/>
                </div>
            )
        }
        else{
        return(
            <div>
                <NavigationBar/>
                <Videos/>
            </div>
        )
    }
    }   
}
export default Dashboard;