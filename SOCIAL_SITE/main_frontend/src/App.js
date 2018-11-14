import React, { Component } from 'react';
import {BrowserRouter as  Router,Link} from 'react-router-dom';
import Route from 'react-router/Route';
import Login from './components/Login';
import Register from './components/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </switch>
      </Router>
      
    );
  }
}

export default App;
