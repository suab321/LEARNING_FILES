import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router/Route'
import Google from './Google';
import Form from './Form';
import Wink from './Wink';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
    <Router>
      <switch>
        <Route path='/google' component={Google}/>
        <Route path='/login' component={Form}/>
        <Route path='/link:/name' component={Wink}/>
        <a href="http://localhost:3002/google/login"><button>login</button></a>
        <Link to='/login'><button>Form Login</button></Link>
      </switch>
    </Router>
    );
  }
}

export default App;
