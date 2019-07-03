import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';

import Auth from '../src/auth/Auth.jsx';
import Dash from '../src/dashboard/Dash';

function App() {
  return (
    <Router>
      <switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/dash' component={Dash}/>
      </switch>
    </Router>
  );
}

export default App;
