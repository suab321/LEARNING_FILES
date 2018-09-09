import React,{Component} from 'react'
import Boxlist from '../boxlist/Boxlist'
import Side from '../sidebar/Side'

 class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               
            <div id='bar'>
		    <p id='text'>SUAB FOOD CENTER</p>
            <div id='side'><Side/></div>
	        </div>
            <div id='main'><Boxlist/></div>
            <style jsx>{`
            #bar{
                background-color:rgba(230,0,0,1);
                padding-top: 1px;
                text-align: center;
                border: transparent;
                height: 150px;
                width: 100%;
                position:fixed;
                
                
                
                }
            #text{
                padding-top:10px;
                font-size: 3em;
                font-style: bold;
                color:rgba(0,230,0,0.9)
            }
            #side{
                text-align:left;
                padding-top:2px;
                positon:fixed;
            }
            #main{
                
                display:inline-block;
                padding-top:10em;
                padding-left:10em;
            }
        `}
            </style>
            </div>
        )
    }
}
export default Navbar
