import React from 'react';

class Time extends React.Component{
    constructor(){
        super();
        this.state={time:new Date().toLocaleString()}
        this.tick=this.tick.bind(this);
    }

    tick(){
        this.setState({time:new Date().toLocaleString()})
    }
    componentDidMount(){
       setInterval(()=>{
           this.tick()
       },1000)
    }
    render(){
        return(
            <h2>{this.state.time.split(',')[1]}</h2>
        )
    }
}

export default Time;