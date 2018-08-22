import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {act} from './action.js';





const mapStatetoProps=(state)=>{
  return{
    isloggedIn:state.log
  }
}

const mapDispatchtoProps=(dispatch)=>{
  return{
    loggin:()=>dispatch(act())
  }
}

class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const{isloggedIn,loggin}=this.props
    console.log(isloggedIn)
    return (
      <div className="App">
      {
        (isloggedIn)
        ?<div>LoggedIn</div>
        :(<div>
        <button onClick={loggin}>Click to login</button>
        </div>
          )
      }
        
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
