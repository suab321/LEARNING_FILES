import Link from 'next/link'
import axios from 'axios'
axios.defaults.withCredentials=true
const Order_placed=(props)=>{
    return(
        <div>
        <div>
           <Link href='/index'><button>Click to go Back!</button></Link>
            </div>
        <div id='main'>
            <h1>Congrats Order Placed</h1>
        <img src='https://thetechyhub.com/wp-content/uploads/2016/01/eating-food-gif.gif'
        height='400px' width="400px"/>
        <style jsx>
        {`#main{
           font-size:3em;
            text-align:center;
        }`}
        </style>
        </div>
        </div>
    )
}
export default Order_placed