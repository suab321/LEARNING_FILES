import React from 'react';
import {Nav,NavDropdown,Navbar,FormControl,Form,Button} from 'react-bootstrap';
import Axios from 'axios';
import {Redirect} from 'react-router';

import {backend} from '../url';


class NavigationBar extends React.Component{
    constructor(){
        super();

        this.searchField=React.createRef();
        this.fileRef=React.createRef();

        this.search=this.search.bind(this);
        this.logout=this.logout.bind(this);
        this.upload=this.upload.bind(this);

        this.state={
            recommendedVideos:[],
            alert:{type:'',msg:''},
            Redirect:false
        };
    }
    //function to search//
    search(){
        console.log(this.searchField.current.value);
        // Axios.get()
    }
    //function ends//

    //function when user clicks upload button//
    upload(){
        this.setState({Redirect:true})
    }
    //functions ends//

    //function for logout click//
    logout(){
        Axios.get(`${backend}/logout`,{withCredentials:true});
    }
    //function ends//

    render(){
        if(!this.state.Redirect){
            return(
                <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={this.logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={this.upload}>Upload Video</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/upload"/>
            )
        }
    }
}
export default NavigationBar;