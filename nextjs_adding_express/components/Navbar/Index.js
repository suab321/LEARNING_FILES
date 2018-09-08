import Reat,{Component} from 'react'
import Link from 'next/link'

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link href='/index'><button>Index</button></Link>
                <Link href='/about'><button>About</button></Link>
            </div>
        )
    }
}
export default Navbar