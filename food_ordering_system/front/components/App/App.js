import React,{Component} from 'react'
import Navbar from '../navbar/Navbar'
import User from '../user/User'


class App extends Component{
    constructor(props){
        super(props)
        this.state={route:'home'}
    }
    render(){
        return(
            <div>
                {
                this.state.route==='home'
                ?<div>
                    <User><Navbar/></User>
                </div>
                :(<div></div>)
                }
            </div>
        )
    }
}
export default App