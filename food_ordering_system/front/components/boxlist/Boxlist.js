import Box from '../box/Box';
import React,{Component} from 'react';

class Boxlist extends Component{
    
    constructor(){
        super()
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
            return(<Box name={item.name} price={this.items.Price} url={'sd'} category={this.items.category}/>)
        })
        return(
            <div>
                {boxes}
            </div>
        
        )
    }
}
export default Boxlist