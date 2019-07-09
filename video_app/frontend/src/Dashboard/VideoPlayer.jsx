import React from 'react';

//developer made components imports//
import {backend} from '../url';
import CommentLike from './CommentLike';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
//ends//

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAD:true,
            videoID:this.props.video_id.video_id,
            Timer:0,
            subButton:{type:"Subscribe",color:"info"}
        };

        this.adEnded=this.adEnded.bind(this);
        this.adStarted=this.adStarted.bind(this);
        this.updateTimer=this.updateTimer.bind(this);
        this.skipAD=this.skipAD.bind(this);
        this.subscribe=this.subscribe.bind(this);
    }

    componentDidMount(){
        if(this.props.channel.channelSubscribed.indexOf(localStorage.getItem('user_id')) !== -1){
            var obj={type:"Subscribed",color:"grey"}
            this.setState({subButton:obj});
        }
    }

    skipAD(){
        if(this.state.Timer === 0)
            this.adEnded();
    }

    adEnded(){
        this.setState({isAD:false});
        this.props.shouldShowVieos(false);
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

    subscribe(){
        Axios.post(`${backend}/video_service/subscribe`,{channel:this.props.channel._id},{withCredentials:true})
    }

    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.video_id.video_id !== this.state.videoID){
            this.setState({isAD:true,videoID:nextProps.video_id.video_id});
        }
    }

    render(){
        if(this.state.isAD){
            return(
                <div>
                <video autoPlay onPlay={this.adStarted} width="600" onEnded={this.adEnded} key={`${this.state.video_id}/1`}>
                    <source src='https://www.w3schools.com/html/mov_bbb.mp4'/>
                </video>
                <button onClick={this.skipAD}>{this.state.Timer||"Press to skip the AD"}</button>
                <h4>{this.props.video_id.Title}</h4><br/>
                <p>{this.props.video_id.Description}</p><br/><br/>
                <h5>Channel : {`${this.props.channel.name}`}</h5>
                <Button onClick={this.subscribe}>{this.state.subButton.type}</Button>
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
                    <h4>{this.props.video_id.Title}</h4><br/>
                    <p>{this.props.video_id.Description}</p><br/><br/>
                    <h5>Channel : {`${this.props.channel.name}`}</h5>
                    <Button onClick={this.subscribe}>{this.state.subButton.type}</Button>
                    <div style={{position:'absolute'}}><CommentLike video={this.props.video_id}/></div>
                </div>
            )
        }
    }

}

export default VideoPlayer;
