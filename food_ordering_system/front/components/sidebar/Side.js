import React,{Component} from 'react';

class Side extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div id='main'>
                <select>
                    <option name='mc'>Main Course</option>
                    <option name='sn'>Snacks</option>
                    <option name='des'>Dessert</option>
                </select><br/><br/><br/><br/><br/>
                <input type='checkbox' value='veg'/>Veg<br/>
                <input type='checkbox' value='nonveg'/>Non-Veg<br/><br/><br/><br/><br/><br/>
                <select>
                    <option name='ind'>Indian</option>
                    <option name='chi'>Chinese</option>
                </select>
            </div>
            <style jsx>
            {`
            #main{
                background-color:rgba(230,187,98,0.5);
                width:10em;
                height:100%;
                margin-top:1em;
                padding-top:2px;
                margin-top:2px;
                padding-bottom:2px;
            }
            `}
            </style>
            </div>
        )
    }
}
export default Side;