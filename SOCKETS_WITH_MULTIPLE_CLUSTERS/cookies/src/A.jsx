import React from 'react';
import Cookies from 'universal-cookie';

class A extends React.Component{
    
    constructor(props){
        super(props);
        const cookies=new Cookies();
        console.log(cookies.get("suab321"));
    }

    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <h1>ajshhkjas</h1>
            </div>
        )
    }
}
export default A;