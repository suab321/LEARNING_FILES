
import React,{Component} from 'react'
import Navbar from '../components/navbar/Navbar'
import Boxlist from '../components/boxlist/Boxlist'
import Side from '../components/sidebar/Side'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <div id='nav'><Navbar/></div>
                <div id='side'><Side/></div>
            <div id='main'>
           <Boxlist/>
            </div>
            <style jsx>
            {`#main{
                display:inline-block;
                padding-left:10em;
            }
            #side{
                position:fixed;
            }
            #nav{
                positon:fixed;
            }`}
            </style>
            </div>
        )
    }

}
export default Home;