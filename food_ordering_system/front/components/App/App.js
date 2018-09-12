import React,{Component} from 'react'
import Navbar from '../navbar/Navbar'
import User from '../user/User'


class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div>
                    <User><Navbar/></User>
                </div>
        )
    }
}
export default App