import React from 'react';

const S_friend=(props)=>{
    return(
        <div style={{display:"flex"}}>
            <img src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,fl_progressive,h_533,q_auto,w_800/v1428564288/article/R10141_image1" height="200px" width="200px"/>
            <h5 onClick={()=>props.clicked(props.details)}>{props.details.name}</h5>
        </div>
    )
}
export default S_friend;