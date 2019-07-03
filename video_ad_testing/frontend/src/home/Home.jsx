import React from 'react';
import {Redirect} from 'react-router';

import List from './List';



class Home extends React.Component{
    constructor(){
        super();
        this.state={redirect:false,url:""}
        this.video=React.createRef();
        this.clicked=this.clicked.bind(this);
    }

    clicked(url){
        this.setState({url:url,redirect:true})
    }


    render(){
        if(!this.state.redirect){
            var videos_url=["https://media.w3.org/2010/05/sintel/trailer_hd.mp4","https://media.w3.org/2010/05/sintel/trailer_hd.mp4","https://media.w3.org/2010/05/sintel/trailer_hd.mp4","https://media.w3.org/2010/05/sintel/trailer_hd.mp4"]
            var videos=videos_url.map(i=>{
                return(
                    <div>
                        <List clicked={this.clicked} url={i} poster={"https://www.guidedogsvictoria.com.au/wp-content/themes/default/static/img/puppy.png"}/>
                    </div>
                )
            })
            return(
                <div>
                {videos}
                </div>
            )
        }
        else{
            return(
                <Redirect to={{
                    pathname:"/single_video",
                    state:{url:this.state.url}
                }}/>
            )
        }
    }
}

export default Home;


// https://media.w3.org/2010/05/sintel/trailer_hd.mp4