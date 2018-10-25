import React,{Component} from 'react';
import {BrowerRouter as Router,Link} from 'react-router-dom'; 
import Route from 'react-router/Route';
import './navi.css';
import {Nav,Navbar,NavDropdown,MenuItem,NavItem} from 'react-bootstrap';

class Navibar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id='id'>
                <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem>Action</MenuItem>
                    <MenuItem >Another action</MenuItem>
                    <MenuItem >Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem >Separated link</MenuItem>
                </NavDropdown>
                </Nav>
                <Nav pullRight>
                <NavItem href='/login'>
                    Link login
                </NavItem>
                <NavItem href='/'>
                    Link Home
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default Navibar;