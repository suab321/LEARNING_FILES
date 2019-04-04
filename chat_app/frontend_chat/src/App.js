import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/authentication/Login';
import {Route} from 'react-router';
import Friendlist from './components/friends/Friendlist';
import Chat from './components/chat_page/Chat';
import Axios from 'axios';
import {Redirect} from 'react-router';
import LoggedIn from './components/loggedIn/LoggedIn';
const {url}=require('./components/url');


class App extends Component {

  constructor(){
    super();
    this.state={redirect:false}
    Axios.get(`${url}/services/info`,{withCredentials:true}).then(res=>{
      if(res.status === 403)
        this.setState({redirect:true});
    }).catch(err=>{
      this.setState({redirect:true})
    })
  }
  
  render() {
    if(this.state.redirect){
      console.log("yes");
      return(
        <Router>
           <Route path="*" component={Login}/>
        </Router>
      )
  }
  else{
    return (
      <Router>
        <switch>
          <Route path="/login" component={Login}/>
          <Route path="/friends" component={Friendlist}/>
          <Route path="/chatpage" component={Chat}/>
          <Route path="/loggedIn" component={LoggedIn}/>
        </switch>
      </Router>
    );
  }
}
}

export default App;
