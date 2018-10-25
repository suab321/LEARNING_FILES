import React,{Component} from 'react';
import Navibar from '../navibar/Navibar';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router/Route';
import Login from '../login/Login';



class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Router>
                <div>
                <Navibar/>
                <Route path='/login' component={Login}/>
                </div>
            </Router>
        )
    }
}
export default Home;