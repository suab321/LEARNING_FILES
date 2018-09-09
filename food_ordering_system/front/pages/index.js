import Navbar from '../components/navbar/Navbar'
import Boxlist from '../components/boxlist/Boxlist'
import Side from '../components/sidebar/Side'
import React,{Component} from 'react'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <Navbar/>
           <div id='side'><Side/></div>
           <style jsx>
           {`#side{
               padding-top:10em;
               position:fixed;
           }`}
           </style>
           </div>
        )
    }

}
export default Home;