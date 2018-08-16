import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User=({match})=>{
  return(
    <div>
    <h1>Hello User {match.params.username}</h1>
    </div>
    )
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact strict render={
          ()=>{
            return(<h1>Hello home</h1>)
          }
        }>
        </Route>
        <Route path='/dashboard/:username' exact strict component={User}>
        </Route>

        <NavLink to='/' strict activeStyle={{color:'green'}}>Home</NavLink>

      </div>
      </Router>
    );
  }
}

export default App;
