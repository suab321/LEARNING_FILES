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
        
        this.state={
            isFileCorrect:false,
            isUploadError:false,
            clickedVideo:{video_id:null,channel:null},
            videos:[],
            key:'',
            showVids:false
        };
        this.playVideo=this.playVideo.bind(this);
        this.showVideosInPlayer=this.showVideosInPlayer.bind(this);

    }

    playVideo(channel,video){
        if(this.state.clickedVideo.video_id === null || this.state.clickedVideo.video_id.video_id !== video.video_id){
            let obj={video_id:video,channel:channel};
            this.setState({clickedVideo:obj,key:video.video_id});
            console.log("yes");
        }
    }

    showVideosInPlayer(dec){
        this.setState({showVids:true});
    }

    render(){
        if(this.state.clickedVideo.video_id !== null){
            return(
                <div>
                    <div style={{position:'fixed',margin:'15px 15px'}}><NavigationBar/></div>
                    <div>
                        <div style={{position:'float'}}><VideoPlayers  channel={this.state.clickedVideo.channel} video_id={this.state.clickedVideo.video_id} shouldShowVieos={this.showVideosInPlayer} /></div>
                        {(this.state.showVids)?<Videos type={'list'} videoSelect={this.playVideo}/>:''}
                        
                    </div>
                </div>
            )
        }
        else{
        return(
            <div>
               <div style={{position:'fixed'}}><NavigationBar/></div>
                <Videos type={'inline-block'} videoSelect={this.playVideo}/>
            </div>
        )
    }
    }   
}
export default Dashboard;