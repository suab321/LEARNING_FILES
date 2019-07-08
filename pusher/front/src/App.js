import React, { Component } from 'react';
import './App.css';
import Pushere from './Pushere'
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.Pusher=new Pushere();
    this.Pusher.activate();
    this.notify=this.notify.bind(this);
  }
  async notify(){
    await Axios.get('http://localhost:3002');
  }
  render() {
    return (
      <div className="App">
      <h1>Howdy</h1>
      <button onClick={this.notify}>click</button>
      </div>
    );
  }
}

export default App;
