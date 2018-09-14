import App from '../components/App/App'
import React,{Component} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;


class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <App/>
           </div>
        )
    }
}
export default Home;