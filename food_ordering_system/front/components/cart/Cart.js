import Box from '../cart_box/Box'
import React,{Component} from 'react'
import Link from 'next/link'
import axios from 'axios'

class Cart extends Component{
   
    constructor(props){
        super(props)
        this.state={data:[]}
        this.remove=this.remove.bind(this)
        this.set=this.set.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
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

componentDidMount(){
    console.log('in')
    axios.get('http://localhost:3002/cookie').then(response=>{
        axios.get(`http://localhost:3002/cart/cart_food/${response.data}`)
        .then(response=>{this.set(response.data)})
    })
}

render(){
    const boxes=this.state.data
    console.log(boxes)
        const box=boxes.map(item=>{
            return(<Box id={item._id} remove={this.remove} name={item.name} price={item.price} url={item.url} category={item.category}/>)
        })
            console.log(box)
   return(
        <div>
        <div id='main2'>
        <div id='bar'>
        <div id='remove'><p>ClICK TO REMOVE ITEMS</p></div>
		<p id='text'>SUAB FOOD CENTER</p>
	    </div>
            <div id='main'>{box}</div></div>
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

