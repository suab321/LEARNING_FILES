import React, { Component } from 'react';
import {BrowserRouter as  Router} from 'react-router-dom';
import Route from 'react-router/Route';
import Login from './components/Login';
import Register from './components/Register'
import Verification from './components/Verification';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import NotificationModal from './components/NotificationModal';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import Friend_list from './components/Friend_list';
import Profile_page_other from './components/Profile_page_other';
import Upload_page from './components/Upload_page';
import './app.css';
import io from 'socket.io-client';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import socketHandler from './components/SocketHandler'
import Profile_page_user from './components/Profile_page_user';
import Logout from './components/Logout';
import Axios from 'axios';
import noty from 'noty';



class App extends Component {
  constructor(){
    super();
    this.showModal=this.showModal.bind(this);
    Axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
      if(res.status===200){
        Axios.get('http://localhost:3002/get_all_user',{headers:{Authorization: `Bearer ${res.data}`}}).then(res=>{
          this.setState({data:res.data});
        })
      }
    })
  this.handle_socket=new socketHandler();
  this.handle_socket.handle_chat(io);
  }
  showModal(){
    
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
          <Route path='/profile/:id/:profile_image' component={Profile_page_other}/>
          <Route path='/upload' component={Upload_page}/>
          <Route path='/profile_page' component={Profile_page_user}/>
          <Route path='/logout' component={Logout}/>
        </switch>
        <Navbar inverse fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullLeft>
    <NavItem href='/all_user' bsStyle={{fontSize:'2em'}}>Users</NavItem>
    <NavItem onClick={this.showModal} bsStyle={{fontSize:'2em'}}>Chat</NavItem>
    <NavItem href='/profile_page'bsStyle={{fontSize:'2em'}}>profile</NavItem>
    </Nav>
   <Nav pullRight>
   <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1} href="/logout">Logout</MenuItem>
      <MenuItem eventKey={3.2}>Settings</MenuItem>
    </NavDropdown>
   </Nav>
   </Navbar.Collapse>
</Navbar>
</div>
</Router>
      
    );
  }
}

export default App;
