import Box from '../cart_box/Box'
import React,{Component} from 'react'
import Link from 'next/link'
import axios from 'axios'




class Cart extends Component{
   
    constructor(props){
        super(props)
        this.state={data:[]}        
    }

render(){
    var box=[]
    axios.get('http://localhost:3002/cookie').then(response=>{
        axios.get(`http://localhost:3002/cart/cart_food/${response.data}`)
        .then(response=>{console.log(response.data.map(item=>{
            return(<Box name={item.name} price={item.price} url={item.url} category={item.category}/>)
        }))})})
        console.log(box)
   return(
        <div>
        <div id='main2'>
        <div id='bar'>
        <div id='remove'><p>ClICK TO REMOVE ITEMS</p></div>
		<p id='text'>SUAB FOOD CENTER</p>
	    </div>
            <div id='main'></div></div>
            <div id='main2'><Link href='/Order_placed'><button >Place Order</button></Link></div>
            
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
                padding-top:10px;
                font-size: 3em;
                font-style: bold;
                color:rgba(0,230,0,0.9)
            }
            #main{
                margin-right:5em;
                padding-top:15em;
                padding-left:10em;
            }
            
            #remove{
                font-size:1em;
                color:black
            }
            #main2{position:absolute;}
            
            button{
                position:fixed;
                margin-left:70em;
                margin-top:4em;
                font-size:1.5em;
            } 
        `}
            </style>
        </div>
    )
}
}
export default Cart

