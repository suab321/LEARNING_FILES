import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import Admin_Login from './components/admin_login/Admin_login';
import Admin_dashboard from './components/admin_dashboard/Admin_dashboard';

class App extends Component {
  render() {
    return (
     <Router>
       <switch>
            <Route path="/admin/login" component={Admin_Login}/>
            <Route path="/admin/dashboard" component={Admin_dashboard}/>
       </switch>
     </Router>
    );
  }
}

export default App;
