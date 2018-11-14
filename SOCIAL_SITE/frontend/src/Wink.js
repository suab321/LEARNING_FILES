import React from 'react';

class Wink extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.match.name}</h1>
            </div>
        )
    }
}
export default Wink;