import Cart from '../components/cart/Cart'
import axios from 'axios'
axios.defaults.withCredentials=true;

const cart=()=>{
    return(
        <div><Cart/></div>
    )
}
export default cart