import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Dropdown, DropdownButton } from 'react-bootstrap';

import logoImage from './data/logo.png';
import userPhoto from './data/user_photo.png';


// END of Modal function

class HeaderAdmin extends Component {

    constructor(){
        super()
        this.state = {
            homes: "homes"
        }

    }


    render(){   

        let { userX, pathX, pathY }  = this.props;
        let display = 'none';
    

        if ( userX === '007'){
            display = 'nice';
        }
        

        return (
        <div style={{background: 'black'}}>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={dumbFlix}>
                <a href="/logged"><Image src={logoImage} fluid /></a>
                </Nav>
                
                <Form inline>


                    { display === "none" ? (    
                    <div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>) : (
                    <div>
                        <DropdownButton
                        alignRight
                        title={<Image src={userPhoto} />}
                        id="dropdown-menu-align-right"
                        variant="dark"
                        
                        >
                            <Dropdown.Item eventKey="3" onClick={() => pathX()}> <i className='fas fa-file-video' style={{width: 20}}></i> List Film </Dropdown.Item>
                            <Dropdown.Item eventKey="4" onClick={() => pathY()}> <i className='fas fa-coins' style={{width: 20}}></i> Transaction </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    )
                    }

                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}


const dumbFlix = {
    marginRight: 'auto'
};


export default HeaderAdmin;
