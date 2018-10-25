import React, { Component } from 'react';
import Home from './components/home/Home';
import Route from 'react-router/Route';
import {BrowserRouter as Router} from 'react-router-dom';



class App extends Component {
  render() {
    return (
        
          <div>
            <Home/>
          </div>
    );
  }
}

export default App;
