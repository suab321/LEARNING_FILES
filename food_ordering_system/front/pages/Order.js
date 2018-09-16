import Order_item from '../components/order_item/Order_item'
import axios from 'axios'
axios.defaults.withCredentials=true;
import React,{Component} from 'react'
import Link from 'next/link'

class Order extends Component{
    constructor(){
        super()
        this.state={data:[]}
        this.set=this.set.bind(this)
        axios.get('http://localhost:3002/cookie').then(response=>{
            axios.get(`http://localhost:3002/cart/get_placed_order/${response.data}`)
            .then(response=>{
                this.set(response.data)
            })
        })
    }
    set(data){
        this.setState({data:data})
    }

   render(){
       console.log(this.state.data)
       const boxe=this.state.data.map(item=>{
           return(<Order_item date={item.date}name={item.orders.name} price={item.orders.price} url={item.orders.url} category={item.orders.category}/>)
       })
       console.log(boxe)
    return(
        <div>
        <div id='main2'>
        <div id='bar'>
		<p id='text'>ORDERED ITEMS</p>
	    </div>
            <div id='main'>{boxe}</div></div> 
            <style jsx>{`
            #bar{
                background-color:rgba(123,100,150,0.8);
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

export default Order;