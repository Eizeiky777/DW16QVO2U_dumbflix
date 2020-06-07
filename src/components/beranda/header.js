import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import logoImage from './data/logo.png';
import Jumbotron from './jumbotron';
import MovieList from './movielist';


// Modal function 
function LoginUser(props) {

    const history = useHistory();

    function tester (){
        let path = `logged`; 
        history.push(path);
    }

    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
    >

        <Modal.Body className="bg-dark rounded pb-4">
            <h1 className="bg-dark text-light d-flex justify-content-center" >Login</h1>
            <Form style={{width:"50%", margin:"auto"}}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="bg-light"/>
                <Form.Text className="text-light">
                    * We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button type="submit" variant="danger" block className="text-light" onClick={() => tester()} >
                    Login
                </Button>
                <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                <div className="text-right mt-2">
                <Button onClick={props.onHide} className="btn btn-outline-dark bg-dark" >x</Button>
                </div>
            </Form>
        </Modal.Body>
        
    </Modal>
    );
}


function Registered(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            

            >
        
            <Modal.Body className="bg-dark rounded pb-4" >
                <h1 className="bg-dark text-light d-flex justify-content-center" >Register</h1>
                <Form style={{width:"50%", margin:"auto"}} method="get">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="bg-light"/>
                        <Form.Text className="text-light">
                        * We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="text-light">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label className="text-light">Gender</Form.Label>
                        <Form.Control as="select" custom>
                        <option>Male</option>
                        <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label className="text-light">Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label className="text-light">Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    
                    <Button type="submit" variant="light" size="lg" className="text-danger" block>
                        Register
                    </Button>
                    <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                    <div className="text-right mt-2">
                    <Button onClick={props.onHide} >Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        
        </Modal>

        
    );
}



// END of Modal function

class Header extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false, id: 0, homes: "homes"
        }

    }


    testX(e, d){
        this.setState({id: e});
        this.setState({homes: d});
    }

    testY(f, g){
        this.setState({homes: f});
        this.setState({id: g});
    }

    render(){   

        const { modalShow, modalRegister, id, homes} = this.state;
     
        return (
        <>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#" onClick={() => this.testY('homes', 0)}><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="#" onClick={() => this.testX(2, 'x')}><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="#" onClick={() => this.testX(1, 'x')}><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>

                    <div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>

                </Form>
            </Navbar.Collapse>
            </Navbar>

            {
                <Jumbotron ids={id} />
            }
            {
                <MovieList ids={id} homi={homes}/>
            }

            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})}
                nilai={1}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
            />
        </>
        );
    }
}


const dumbFlix = {
    marginRight: 'auto'
};


export default Header;
