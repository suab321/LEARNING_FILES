import React,{Component} from 'react'
import Link from 'next/link';
import axios from 'axios'


class User extends Component{
    constructor(props){
        super(props)
        this.state={popup:'no',log:''}
    this.change=this.change.bind(this)
    this.close=this.close.bind(this)
    this.logout=this.logout.bind(this)
    }
    change(){
        console.log('yes')
        this.setState({popup:'yes'})
    }
    close(){
        this.setState({popup:'no'})
    }
    logout(){
        axios.get('http://localhost:3002/logout').then(response=>{
            if(response.data==='ok'){
                console.log('ok')
            }
        })
    }
    componentDidMount(){
        axios.get('http://localhost:3002/cookie').then(
            response=>{
                if(response.data!=undefined)
                    this.setState({log:ok})
            }
        )
    }
    render(){
        return(
            <div>{
                (this.state.popup==='yes')
                ?<div>
                <div id='outer'>
                    <div id='inner'>
                        <Link href='/cart'><button>My Cart</button></Link><br/><br/><br/>
                       <Link href='/Order'><button>ViewOrders</button></Link><br/><br/><br/>
                        <Link href='/Login'><button onClick={this.logout}>LogOut</button></Link><br/><br/><br/>
                        <button onClick={this.close}>Close</button><br/><br/>
                    </div>
                    </div>
                    {this.props.children}
                    
                </div>
                :(
                    
                    <div>
                    <div id='main'>{this.props.children}</div>
                    <div id='main'><img id='button' onClick={this.change} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'height='70px' width='70px'/>
                    </div>
                    </div>
                   
                   
                )
            }
            <style jsx>
            {`p{
                font-family:sans-serif;
                font-size:1em;
            }
            #outer{
                position:absolute;
                width:100%;
                height: 100%;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background-color:rgb(0,0,0,0.2);
            }
            #inner{
                border:1px solid balck;
                padding-bottom:4em;
                padding-top:3em;
                position: fixed;
                left: 44%;
                right: 44%;
                top: 25%;
                bottom: 15%;
                height: 15%;
                margin: auto;
                background: white;
               text-align:center;
               background-color:rgba(256,151,78,0.9)
            }
            #button{
                 position:fixed;
                 margin-top:5em;
                 margin-left:110em;
                 cursor:pointer;
                 font-size:1em;
             }
            button{
                
            }
            #main{position:absolute;}
            
            `}
            </style>
            </div>
        )
    }
}

export default User