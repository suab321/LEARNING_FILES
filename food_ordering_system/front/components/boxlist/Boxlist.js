import Box from '../box/Box';
import React,{Component} from 'react';

class Boxlist extends Component{
    
    constructor(){
        super()
        this.obj={}
    this.items=[{name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},
    {name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'},{name:'Gulab Jamun',Price:100,category:'desert'}]

}

    render(){
        const boxes=this.items.map(item=>{
            return(<Box name={item.name} price={item.Price} url={'sd'} category={item.category}/>)
        })
        return(
            <div id='main'>
                {boxes}
                <style jsx>
                {`#main{margin-right:1.5em;}`}
                </style>
            </div>
        
        )
    }
}
export default Boxlist