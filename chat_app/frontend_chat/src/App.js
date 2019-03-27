import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/authentication/Login';
import {Route} from 'react-router';
import Friendlist from './components/friends/Friendlist';
import Chat from './components/chat_page/Chat';
import Axios from 'axios';
import Socket_fucn from './components/sockets/Socket_fucn';
import LoggedIn from './components/loggedIn/LoggedIn';
const {url}=require('./components/url');


class App extends Component {

  constructor(){
    super();
   
  }
  
  render() {
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

export default App;
