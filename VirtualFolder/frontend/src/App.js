import React from 'react';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import {Route} from 'react-router';

import Show from './Show';
import Axios from 'axios';
class App extends React.Component{

  constructor(){
    super();
    this.state={
      folders:[],
    }
  }
  componentDidMount(){
    Axios.get('http://localhost:3002/get').then(res=>{
      console.log(res.data);
      this.setState({folders:res.data});
    })
  }
  render(){
    return(
      <Router>
        <Switch>
           {this.state.folders.map(i=>{
             return(
               <div>
                  <Route exact strict path={`/${i.name}`} render={(props)=><Show {...props} data={i.Contents} />}/>
                  <Link to={`/${i.name}`}>{i.name}</Link>
                </div>
            )})}
            </Switch>
      </Router>
    )
  }
}
export default App;