import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import Axios from 'axios';


//developer made modules//
import {backend} from "./url";
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard';
import Upload from './Upload/Upload';
import NavigationBar from './Dashboard/NavigationBar';
//ends//

class App extends React.Component{
  constructor(){
    super();
    this.state={isLoggedIn:false}
  }
  componentWillMount(){
    Axios.get(`${backend}`,{withCredentials:true}).then(res=>{
        this.setState({isLoggedIn:true});
    })
  }

  render(){
    if(this.state.isLoggedIn){
    return(
      <Router>
        <switch>
          <Route path="/" component={Dashboard}/>
          <Route path="/upload" component={Upload}/>
        </switch>
      </Router>

    )
  }
  else{
    return(
      <Router>
        <switch>
          <Route path="*" component={Login}/>
        </switch>
      </Router>
    )
  }
}
}

export default App;
