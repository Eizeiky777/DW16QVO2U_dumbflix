import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import logoImage from './data/logo.png';
import userPhoto from './data/user_photo.png';
import userPhotoFull from './data/user_photo_full.png';


// Modal function 
function LoginUser(props) {

    const history = useHistory();

    function tester (){
        let path = `/`; 
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
            <h1 className="bg-dark text-light d-flex justify-content-center pb-5" >LOG OUT </h1>
            <Form style={{width:"50%", margin:"auto"}} className="pb-5">
                <p className="text-white">Are you sure to leaving right now ? </p>
                <Button type="submit" variant="danger" block className="text-light" onClick={() => tester()} >
                    Yes
                </Button>
                <div className="text-right mt-2">
                <Button onClick={props.onHide} block >No</Button>
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

class ProfileAndPayment extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false
        }

    }

    render(){   

        const { modalShow, modalRegister} = this.state;
        let { type } = this.props.match.params;
        

        return (
        <div style={{background: 'black'}}>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/logged"><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="/logged"><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="/logged"><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>

                    <div>
                        <DropdownButton
                        alignRight
                        title={<Image src={userPhoto} />}
                        id="dropdown-menu-align-right"
                        variant="dark"
                        
                        >
                            <Dropdown.Item eventKey="1" href="/logpay/profile"> <i className='fas fa-user pr-2'></i> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="/logpay/pay"> <i className='fas fa-money-check-alt pr-1'></i> Pay</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href="/admin/007"> <i className='fas fa-chalkboard-teacher' style={{width: 20}}></i> Admin </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4" onClick={() => this.setState({modalShow: true})}> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>

                </Form>
            </Navbar.Collapse>
            </Navbar>

                <div style={{paddingBottom:"250px"}}>

                    {
                        type === 'profile' ?(
                    <Container className="mr-auto ml-auto bg-dark mt-5 mb-5" style={{width: 700, height: 400, borderRadius: 10}}>
                        <Row className="pt-3">
                            <Col xs={4} md={6} className="text-white">
                                <div className="pb-2">
                                    <h3>Personal Info</h3>
                                </div>
                                <div className="pl-2">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-user pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2 pt-4">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-envelope pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2 pt-4">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-star pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2 pt-4">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-venus-mars pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2 pt-4">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-phone pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2 pt-4">
                                    <div className="d-inline-flex">
                                        <i className='fas fa-building pr-2 pt-2' style={{width: 30, color: '#E50914'}}></i>
                                        <div>
                                            <h6>Personal Info</h6>
                                            <span className="text-secondary" style={{fontSize: 12, marginTop: "-10px", position: "absolute"}}>Full name</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={8} md={6} className="pt-3 text-center">
                                <div >
                                    <Image src={userPhotoFull} style={{width: 200, height: 250, borderRadius: 5 }} />
                                </div>
                                <Button className="btn-outline-danger text-white my-2" style={{background: '#E50914', width: 200}}>Change Photo Profile</Button>
                            </Col>
                        </Row>
                    </Container>
                        ):(
                        <div className="text-white text-center">
                            <div className="pt-5 pb-4">
                                <h1>Premium</h1>
                            </div>
                            <div>
                                <p>Bayar sekarang dan nikmati streaming film-film yang kekinian dari <span style={{color: "#E50914", fontWeight: 'bold'}}>DUMBFLIX</span></p>
                                <p style={{fontWeight: 'bold'}}><span style={{color: "#E50914"}}>DUMBFLIX</span> : 0981312323</p>
                            </div>
                            <div className="pt-3">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={12}>
                                        <Form style={{width:"400px", margin:"auto"}} className="pb-5">
                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Control type="number" placeholder="input your account number" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicfile">
                                                <Form.Control type="file" />
                                            </Form.Group>
                                            <Button className="text-white btn-outline-danger" block style={{ background: "#E50914"}} >Kirim</Button>
                                        </Form>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        )
                    }

                </div>
        
            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})}
                nilai={1}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
            />
        </div>
        );
    }
}


const dumbFlix = {
    marginRight: '39%'
};


export default ProfileAndPayment;
