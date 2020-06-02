import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image } from 'react-bootstrap';
import logoImage from './data/logo.png';

class Header extends Component {
    render(){
        return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home" ><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="#link"><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="#link"><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav className="mr-auto">
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>
                <Button variant="btn btn-light mr-3 text-danger" style={{width:100}}>Register</Button>
                <Button variant="btn btn-danger" style={{width:100}}>Login</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Header;
