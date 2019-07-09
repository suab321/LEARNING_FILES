import React from 'react';
import 'axios';

//developer made components import//
import {backend} from '../url';
import dislike from '../assets/dislike.png'; 
import like from '../assets/like.png';
import Axios from 'axios';
//ends//

class CommentLike extends React.Component{
    constructor(props){
        super(props);

        this.comment=React.createRef();

        this.state={
            addComment:false,
            isCommentValid:false,
            comments:this.props.video.comments
        }
        this.updateVideo=this.updateVideo.bind(this);
        this.postComment=this.postComment.bind(this);
        
    }

    postComment(){
            let arr=this.state.comments;
            arr.push({msg:this.comment.current.value});
            arr.reverse();
            this.setState({comments:arr});
            Axios.post(`${backend}/video_service/add_comment`,{type:"video",filename:this.props.video.video_id,msg:this.comment.current.value},{withCredentials:true});
    }

    updateVideo(what){
        console.log(this.props.video.video_id)
            Axios.post(`${backend}/video_service/update`,{type:what,filename:this.props.video.video_id},{withCredentials:true});
            console.log("updated");
    }

    render(){
        let comments=this.state.comments.map(i=>{
            return(
                <div style={{paddingBottom:'3px'}}>
                    <hr style={{color:'grey'}}/>
                    <h6>{i.msg}</h6>
                </div>
            )
        })
        return(
            <div>
                <img height="100px" width="100px" src={like} alt="like button" onClick={()=>{this.updateVideo('likes')}}/>
                <img height="100px" width="100px" src={dislike} alt="dislike button" onClick={()=>{this.updateVideo('dislikes')}}/>
                <button onClick={()=>{this.setState((prevState,prevProps)=>({addComment:!prevState.addComment}))}}>Add comments</button>
                <div hidden={!this.state.addComment}>
                    <textarea ref={this.comment}>Enter your comment</textarea>
                    <button onClick={this.postComment}>Post</button>
                </div>
                <h2>Comments</h2>
                <hr/>
                {comments}
            </div>
        )
    }
}
export default CommentLike;