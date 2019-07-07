import React from 'react';

//developer made component imports//
import {backend} from '../url';
import Axios from 'axios';
import SingleVideo from './SingleVideo';
//ends//

class Videos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){
        Axios.get(`${backend}/video_service/get_videos_list_others`,{withCredentials:true}).then(data=>{
            this.setState({data:data.data});
        })
    }

    render(){
        let list;
        if(this.state.data != null){
            list=this.state.data.map(i=>{
                return <SingleVideo details={i} type={this.props.type} videoClicked={this.props.videoSelect}/>
            });
        }
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default Videos;