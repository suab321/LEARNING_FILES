import React,{Component} from 'react'
import Boxlist from '../boxlist/Boxlist'
import Side from '../sidebar/Side'
import Cart from '../cart/Cart'

 class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div id='bar'>
            <div id='add'><p>ClICK TO ADD ITEMS</p></div>
		    <p id='text'>SUAB FOOD CENTER</p>
            <div id='side'><Side/></div>
	        </div>
            <div id='main'><Boxlist/></div> 
            <style jsx>{`
            #bar{
                background-color:rgba(230,0,0,0.1);
                padding-top: 1px;
                text-align: center;
                height: 150px;
                width: 100%;
                position:fixed;
                display:inline-block;
                }
            #text{
                font-size: 2.5em;
                font-style: bold;
                color:rgba(0,230,0,0.9)
            }
            #side{
                text-align:left;
                padding-top:2px;
                positon:fixed;
            }
            #main{
                padding-top:10em;
                padding-left:10em;
            }
            button{
                position:fixed;
                margin-left:130em;
                margin-top:9em;
                
            }
            #add{
                font-size:1em;
                color:black
            }
        `}
            </style>
            </div>
        )
    }
}
export default Navbar
