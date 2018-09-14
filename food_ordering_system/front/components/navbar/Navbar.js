import React,{Component} from 'react'
import Boxlist from '../boxlist/Boxlist'
import Side from '../sidebar/Side'

 class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={category:"Main Course",cui:"Indian",rel:"Veg"}
        this.category=this.category.bind(this)
        this.cui=this.cui.bind(this)
        this.rel=this.rel.bind(this) 
    }
    category(event){
        console.log(event.target.value)
        this.setState({category:event.target.value})
    }
    cui(event){
        console.log(event.target.value)
        this.setState({cui:event.target.value})
    }
    rel(event){
        console.log(event.target.value)
        this.setState({rel:event.target.value})
    }

    render(){
        console.log(this.state.category)
        return(
            <div>
            <div id='bar'>
            <div id='add'><p>ClICK TO ADD ITEMS</p></div>
		    <p id='text'>SUAB FOOD CENTER</p>
            <div id='side'><Side category={this.category} cui={this.cui} rel={this.rel}/></div>
	        </div>
            <div id='main'><Boxlist category={this.state.category} cui={this.state.cui} rel={this.state.rel}/></div> 
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
