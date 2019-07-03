import React from 'react';

const List=(props)=>{
    return(
        <div style={{alignContent:"center"}}>
            <img alt="thumbnail" src={props.poster} width="300" controls onClick={()=>{props.clicked(props.url)}}/>
        </div>
    )
}

export default List;
