import React, { Component } from 'react';
import {BrowserRouter as  Router,Link} from 'react-router-dom';
import Route from 'react-router/Route';
import Login from './components/Login';
import Register from './components/Register'
import Verification from './components/Verification';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import Friend_list from './components/Friend_list';
import './app.css';

class App extends Component {
  click(){
    console.log("click");
  }
  change(e){
    console.log(e.target.value);
  }
  render() {
    return (
      <Router>
        <div>
        <switch>
         <Route path='/all_user' component={Friend_list}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/verification' component={Verification}/>
          <Route path='/search_friend' component={Verification}/>
        </switch>
        <Navbar inverse collapseOnSelect fluid fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
   <Navbar.Form pullLeft>      
   <FormGroup>
        <FormControl type="text" placeholder="Find Friends" onChange={this.change} />
      </FormGroup>{' '}
      <Button type="submit" onClick={this.click}>Submit</Button>
    </Navbar.Form>
    <Nav pullLeft>
    <NavItem href='/search_friend'bsStyle={{fontSize:'2em'}}>Users</NavItem>
    </Nav>
   
  <Navbar.Collapse>
    <Nav pullRight>
    <Button bsStyle="primary" bsSize='large' active onClick={this.click}>
      LogOut
  </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
      </Router>
      
    );
  }
}

export default App;
