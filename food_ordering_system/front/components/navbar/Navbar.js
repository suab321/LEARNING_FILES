import React,{Component} from 'react'

 class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div id='bar'>
		    <p id='text'>SUAB FOOD CENTER</p>
	        </div>
            <style jsx>{`
            #bar{
                background-color:rgba(230,0,0,0.2);
                padding-top: 1px;
                text-align: center;
                border: transparent;
                height: 150px;
                position:fixed
                width: 100%;
                
                
                }
            #text{
                padding-top:10px;
                font-size: 3em;
                font-style: bold;
                color:rgba(0,230,0,0.9)
            }
        `}
            </style>
            </div>
        )
    }
}
export default Navbar
