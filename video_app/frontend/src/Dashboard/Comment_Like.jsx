import React from 'react';
import 'axios';

//developer made components import//
import {backend} from '../url';
import dislike from '../assets/dislike.png'; 
import like from '../assets/like.png';
//ends//

class Comment_Like extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <img height="100px" width="100px" src={like} alt="like button"/>
                <img height="100px" width="100px" src={dislike} alt="dislike button"/>
            </div>
        )
    }
}
export default Comment_Like;