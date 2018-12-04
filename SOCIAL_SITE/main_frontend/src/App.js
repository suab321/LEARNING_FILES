import React, { Component } from 'react';
import {BrowserRouter as  Router} from 'react-router-dom';
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
import Profile_page_other from './components/Profile_page_other';
import Upload_page from './components/Upload_page';
import './app.css';
import io from 'socket.io-client';



class App extends Component {
  constructor(){
    super();
    var socket=io('http://localhost:3002');
    socket.emit('chat',{for:'hi'});
  }
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
          <Route path='/profile/:name/:profile_image' component={Profile_page_other}/>
          <Route path='/upload' component={Upload_page}/>
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
    <NavItem href='/all_user'bsStyle={{fontSize:'2em'}}>Users</NavItem>
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
