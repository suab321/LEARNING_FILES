import React from 'react';
import '../node_modules/video-react/dist/video-react.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';

import Time from './home/time'
import Single from './single_video/Single';
import Home from './home/Home';


class App extends React.Component{

render(){
  return(
    <Router>
      <switch>
        <Route path="/homepage" component={Home} exact strict/>
        <Route path="/single_video" component={Single}/>
        <Route path="/time" component={Time}/>
      </switch>
    </Router>
  )
}
}



export default App;
