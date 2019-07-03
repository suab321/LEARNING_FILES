import React from 'react';

//developer made components imports//
import {backend} from '../url';
import Comment_Like from './Comment_Like';
//ends//

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            isAD:true,
            videoID:'5d1312536305a40f5a177668',
            Timer:0,
        };

        this.adEnded=this.adEnded.bind(this);
        this.adStarted=this.adStarted.bind(this);
        this.updateTimer=this.updateTimer.bind(this);
        this.skipAD=this.skipAD.bind(this);
    }

    skipAD(){
        if(this.state.Timer === 0)
            this.setState({isAD:false});
    }

    adEnded(){
        this.setState({isAD:false})
    }

    adStarted(){
        console.log("ad started");
        this.setState({Timer:5});
    }

    componentWillMount(){
            setInterval(()=>{
                this.updateTimer();
            },1000);
    }

    updateTimer(){
        if(this.state.Timer > 0){
            this.setState((prevState,prevProps)=>({
                Timer:prevState.Timer-1
            }))
        }
        
    }

    render(){
        if(this.state.isAD){
            return(
                <div>
                <video autoPlay onPlay={this.adStarted} width="600" onEnded={this.adEnded}>
                    <source src='https://www.w3schools.com/html/mov_bbb.mp4'/>
                </video>
                <button onClick={this.skipAD}>{this.state.Timer||"Press to skip the AD"}</button>
                <Comment_Like/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <video autoPlay controls width="600">
                        <source src={`${backend}/streaming/stream_video/${this.state.videoID}`}/>
                    </video>
                    <Comment_Like/>
                </div>
            )
        }
    }

}

export default VideoPlayer;
