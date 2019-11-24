import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import {Route} from 'react-router';

import Show from './Show';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      Links:[],
      data:{}
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3002/get').then(res=>{
      console.log(res.data);
      let links=[];
      links.push(res.data.name);
      this.setState({Links:links})
    }).catch(err=>console.log(err));
  }

  render(){
    let links=this.state.Links.map(i=>{
      console.log(i);
      return(
      <Link to={`/${i}`}>{`${i}`}</Link>
      )
    })
    return(
      <Router>
        <Switch>
            <Route path="/:folder" exact strict component={Show}/>
            {links}
        </Switch>
      </Router>
    )
  }
}
export default App;