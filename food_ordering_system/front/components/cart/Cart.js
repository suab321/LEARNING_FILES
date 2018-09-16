import Box from '../cart_box/Box'
import React,{Component} from 'react'
import Link from 'next/link'
import axios from 'axios'

class Cart extends Component{
   
    constructor(props){
        super(props)
        this.state={data:[],place_order:1}
        this.remove=this.remove.bind(this)
        this.set=this.set.bind(this)
        this.place_order=this.place_order.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.close=this.close.bind(this)
        this.open=this.open.bind(this)
}

remove(id){
    console.log(id)
    axios.get('http://localhost:3002/cookie').then(response=>{
        axios.delete(`http://localhost:3002/cart/remove/${response.data}/${id}`)
    })
    this.componentDidMount()
}

set(data){
    this.setState({data:data})
}

place_order(){
    axios.get('http://localhost:3002/cookie').then(response=>{
        this.state.data.map(item=>{axios.put(`http://localhost:3002/cart/order_placed/${response.data}`,
        {name:item.name,price:item.price,category:item.category,url:item.url})})
        axios.delete(`http://localhost:3002/cart/delete_cart/${response.data}`)
    })
    this.setState({place_order:1})
}
close(){
    this.setState({place_order:1})
}
open(){
    this.setState({place_order:0})
}

componentDidMount(){
    console.log('in')
    axios.get('http://localhost:3002/cookie').then(response=>{
        axios.get(`http://localhost:3002/cart/cart_food/${response.data}`)
        .then(response=>{this.set(response.data)})
    })

    this.setState({place_order:1})
}

render(){
    const boxes=this.state.data
    console.log(boxes)
        const box=boxes.map(item=>{
            return(<Box id={item._id} remove={this.remove} name={item.name} price={item.price} url={item.url} category={item.category}/>)
        })

   return(
        <div>
           { 
            (this.state.place_order)
               ?<div>
        <div id='main2'>
        <div id='bar'>
        <div id='remove'><p>ClICK TO REMOVE ITEMS</p></div>
		<p id='text'>SUAB FOOD CENTER</p>
	    </div>
            <div id='main'>{box}</div></div>
            <div id='main2'><button id='order'onClick={this.open}>Place Order</button></div>
            </div>
            :(
                <div>
                    <div id='main2'>
                    <div id='bar'>
                    <div id='remove'><p>ClICK TO REMOVE ITEMS</p></div>
		            <p id='text'>SUAB FOOD CENTER</p>
	                 </div>
                     <div id='main'>{box}</div></div>
                    <div id='outer'>
                    <div id='inner'>
                       <form method='post'>
                       <input id='contact' type='number' name='number'required placeholder='Your Contact Number'/><br/><br/><br/>
                       <input id='add'type='address' name='address' required placeholder='Your Address'/><br/><br/><br/>
                       <input id='zip'type='zipcode' name='address' required placeholder='Enter your zip code'/><br/><br/><br/>
                       <Link href='/Order_placed'><button onClick={this.place_order}type='submit'>Place Order</button></Link><br/><br/><br/>
                           </form>
                        <button onClick={this.close}>Close</button><br/><br/>
                    </div>
                    </div>
                    
                    </div>
            )
           }
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
            
            #order{
                position:fixed;
                margin-left:70em;
                margin-top:4em;
                font-size:1.5em;
            }
            #outer{
                position:absolute;
                width:100%;
                height: 100%;
                top:0;
                bottom:0;
                left:0;
                right:0;
                text-align:center;
                background-color:rgb(0,0,0,0.2);
            }
            #inner{
                border:1px solid balck;
                padding-bottom:4em;
                padding-top:3em;
                position: fixed;
                left: 30%;
                right: 44%;
                top: 25%;
                bottom: 26%;
                height: 27%;
                margin: auto;
                background: white;
               text-align:center;
               background-color:rgba(256,151,78,0.9)
            }
            #add{
                font-size:1em;
                width:25em;
                height:5em;
            } 
        `}
            </style>
        </div>
    )
  }
}
export default Cart

