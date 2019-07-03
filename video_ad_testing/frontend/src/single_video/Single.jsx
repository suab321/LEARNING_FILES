import React from 'react'

class Single extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={isad:true};
        this.ended=this.ended.bind(this);
    }
    ended(){
        this.setState({isad:false})
    }

    render(){
        if(this.state.isad){
            return(
                <div>
                <video autoPlay width="600" onEnded={this.ended}>
                    <source src={this.props.location.state.url}/>
                </video>
                <button wait={3000}>Skip</button>
                </div>
            )
        }
        else{
            return(
                <video autoPlay controls width="600">
                    <source src='https://www.w3schools.com/html/mov_bbb.mp4'/>
                </video>
            )
        }
    }
}

export default Single;
