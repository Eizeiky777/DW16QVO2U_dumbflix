import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal } from 'react-bootstrap';
import logoImage from './data/logo.png';
import logoUser from './data/user_photo.png';


// Modal function 
function LoginUser(props) {
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
                
                <Button variant="danger" block onClick={props.ogin}>
                    <span className="text-light">Login</span>
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
                    <Button  onClick={props.onHide} >Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        
        </Modal>

        
    );
}



// END of Modal function

class Header extends Component {


    state = { modalShow: false, modalRegister: false, displayBio: false};

    toggleDisplayBio = () =>{
        this.setState({ displayBio: !this.state.displayBio });
        this.setState({modalShow: false});
    }


    render(){

        const { modalShow, modalRegister } = this.state;
        const dumbFlix = {
            marginRight: 'auto'
        };

        return (
        <>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home" ><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="#tv-show"><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="#movies"><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>
                {
                    this.state.displayBio ?
                    (<div className="mr-5 ">
                        <Image src={logoUser} fluid />
                    </div>) : (
                    <div className="">
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>
                    )
                }
                </Form>
            </Navbar.Collapse>
            </Navbar>

            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})} ogin={this.toggleDisplayBio}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
            />
        </>
        );
    }
}

export default Header;
