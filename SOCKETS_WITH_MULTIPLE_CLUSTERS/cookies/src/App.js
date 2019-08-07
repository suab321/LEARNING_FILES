import React from 'react';
// import cookie from 'react-cookies'
import cookie from 'universal-cookie'
import A from './A';

class App extends React.Component{
  constructor(){
    super();
    const cookies=new cookie();
    cookies.set("suab321",[1,2,3,4,5]);
  }
  render(){
    return(
      
        <div><A/></div>
    )
  }
}
export default App;