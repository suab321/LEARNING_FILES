import App from '../components/App/App'
import Boxlist from '../components/boxlist/Boxlist'
import Side from '../components/sidebar/Side'
import React,{Component} from 'react'
import Cart from '../components/cart/Cart';

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div>
            <App/>
           </div>
           </div>
        )
    }
}
export default Home;