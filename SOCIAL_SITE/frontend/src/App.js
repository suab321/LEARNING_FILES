import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router/Route'
import Google from './Google';
class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
    <Router>
      <div>
        <Route path='/google' component={Google}/>
        <a href="http://localhost:3002/google/login"><button>Login</button></a>
      </div>
    </Router>
    );
  }
}

export default App;
