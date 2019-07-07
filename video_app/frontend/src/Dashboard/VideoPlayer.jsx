import React from 'react';

//developer made components imports//
import {backend} from '../url';
import CommentLike from './CommentLike';
//ends//

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            isAD:true,
            videoID:this.props.video_id.video_id,
            Timer:0,
        };

        this.adEnded=this.adEnded.bind(this);
        this.adStarted=this.adStarted.bind(this);
        this.updateTimer=this.updateTimer.bind(this);
        this.skipAD=this.skipAD.bind(this);
    }

    skipAD(){
        if(this.state.Timer === 0)
            this.adEnded();
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

    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.video_id.video_id !== this.state.videoID){
            this.setState({isAD:true,Timer:0,videoID:nextProps.video_id.video_id});
        }
    }

    render(){
        if(this.state.isAD){
            return(
                <div>
                <video autoPlay onPlay={this.adStarted} width="600" onEnded={this.adEnded} key={`${this.state.video_id}/1`}>
                    <source src='https://www.w3schools.com/html/mov_bbb.mp4'/>
                </video>
                {/* <h1>{this.state.videoID}</h1> */}
                <button onClick={this.skipAD}>{this.state.Timer||"Press to skip the AD"}</button>
                <h4>{this.props.video_id.Title}</h4><br/>
                <p>{this.props.video_id.Description}</p><br/><br/>
                <h5>Channel : {`${this.props.channel.name}`}</h5>
                <CommentLike video={this.props.video_id}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <video autoPlay controls width="600" key={this.state.video_id}>
                        <source src={`${backend}/streaming/stream_filename/${this.state.videoID}`}/>
                    </video>
                    {/* <h1>{this.state.videoID}</h1> */}
                    <h4>{this.props.video_id.Title}</h4><br/>
                    <p>{this.props.video_id.Description}</p><br/><br/>
                    <h5>Channel : {`${this.props.channel.name}`}</h5>
                    <CommentLike video={this.props.video_id}/>
                </div>
            )
        }
    }

}

export default VideoPlayer;
