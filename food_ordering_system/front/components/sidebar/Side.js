import React,{Component} from 'react';
import { timingSafeEqual } from 'crypto';

class Side extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
            <div id='main'>
                <select onClick={(event)=>this.props.category(event)}>
                    <option name='MainCourse'>Main Course</option>
                    <option name='Snacks'>Snacks</option>
                    <option name='Dessert'>Dessert</option>
                </select><br/><br/><br/><br/><br/>
                <select onClick={(event)=>this.props.rel(event)}>
                    <option name='Veg'>Veg</option>
                    <option name='Non_veg'>Non-Veg</option>
                </select><br/><br/><br/><br/><br/>
                <select onClick={(event)=>this.props.cui(event)}>
                    <option name='Indian'>Indian</option>
                    <option name='Chinese'>Chinese</option>
                </select>
            </div>
            <style jsx>
            {`
            #main{
                background-color:rgba(230,187,98,0.5);
                width:8em;
                height:100%;
                margin-top:1em;
                padding-left:2px;
                padding-top:2px;
                margin-top:2em;
                padding-bottom:2px;
            }
            `}
            </style>
            </div>
        )
    }
}
export default Side;