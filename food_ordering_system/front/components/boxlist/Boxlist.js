import Box from '../box/Box';
import React,{Component} from 'react';
import axios from 'axios'
axios.defaults.withCredentials=true;

class Boxlist extends Component{
    
    constructor(props){
        super(props)
        this.state={data:[]}
        axios.get('http://localhost:3002/food').then(response=>{this.setState({data:response.data})})
        
    }

    render(){
        let boxes1=this.state.data.filter(item=>{
            if(item.category===this.props.category)
                return item
        })
        console.log(boxes1)
        let boxes2=boxes1.filter(item=>{
            if(item.type===this.props.cui)
                return item
        })
        console.log(boxes2)
       let boxes3=boxes2.filter(item=>{
            if(item.gene===this.props.rel)
                return item
        })
        console.log(boxes3)
        const boxe=this.state.data.map(item=>{
            return(<Box name={item.name} price={item.price} url={item.url} category={item.category}/>)
        })
        return(
            <div id='main'>
                {boxe}
                <style jsx>
                {`#main{margin-right:1.5em;}`}
                </style>
            </div>
        
        )
    }
}
export default Boxlist