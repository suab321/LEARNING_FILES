import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { browserHistory } from 'react-router';
import Login from './Login'

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
        <Route path='/login'exact strict component={Login}>
        </Route>
        <Link to='/login' href='/login' exact strict><button>Login</button></Link>

      </div>
      </Router>
    );
  }
}

export default App;
