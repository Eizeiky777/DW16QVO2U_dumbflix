import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import userPhoto from './data/user_photo.png';
import logoImage from './data/logo.png';
import Banner from './jumbotron';

import { connect } from "react-redux";
import { register, login } from "../redux/actions/auth";


// Modal function 
class LoginUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            };
        }

        handleChange = (event) => {
            const { data } = this.state;
            console.log(event.target.name)
            this.setState({
            data: { ...data, [event.target.name]: event.target.value },
            });
        };
        
        handleSubmit = async (event) => {
            event.preventDefault();
            console.log(this.state.data)
            this.props.login(this.state.data);
            this.setState({ data: {} });
            this.props.onHide()
        };


    render(){
        const { data } = this.state;
        const { data: userDataLogin } = this.props.auth;
        if (!(Object.keys(userDataLogin).length === 0 && userDataLogin.constructor === Object)){

        }


            return (
            <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body className="bg-dark rounded pb-4">
                    <h1 className="bg-dark text-light d-flex justify-content-center" >Login</h1>
                    <Form style={{width:"50%", margin:"auto"}} onSubmit={this.handleSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-light">Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                className="bg-light" 
                                name="email"
                                value={data.email ? data.email : ""}
                                onChange={this.handleChange}
                            />
                                <Form.Text className="text-light">
                                    * We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-light">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                className="bg-light" 
                                name="password"
                                value={data.password ? data.password : ""}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        
                        <Button type="submit" variant="danger" block className="text-light">
                            Login
                        </Button>
                        <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                        <div className="text-right mt-2">
                        <Button onClick={this.props.onHide} className="btn btn-outline-dark bg-dark" >x</Button>
                        </div>
                    </Form>
                </Modal.Body>
                
            </Modal>
            );
    }
}


class Registered extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            };
        }

        handleChange = (event) => {
            const { data } = this.state;
            console.log(event.target.value)
            this.setState({
            data: { ...data, [event.target.name]: event.target.value },
            });
        };
        
        handleSubmit = async (event) => {
            event.preventDefault();
            console.log(this.state.data)
            this.props.register(this.state.data);
            this.setState({ data: {} });
            this.props.onHide()
        };

        render(){
            const { data } = this.state;
            const { data: userRegister } = this.props.auth;
            if (!(Object.keys(userRegister).length === 0 && userRegister.constructor === Object)){
                console.log(userRegister)
            }

            return (
            <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                >

                <Modal.Body className="bg-dark rounded pb-4" >
                    <h1 className="bg-dark text-light d-flex justify-content-center" >Register</h1>
                    <Form style={{width:"50%", margin:"auto"}} onSubmit={this.handleSubmit} >

                        <Form.Group controlId="formBasicName">
                            <Form.Label className="text-light">Full Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Full Name" 
                                className="bg-light"
                                name="fullName"
                                value={data.fullName ? data.fullName : ""}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-light">Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                className="bg-light"
                                name="email"
                                value={data.email ? data.email : ""}
                                onChange={this.handleChange}
                            />
                            <Form.Text className="text-light">
                            * We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-light">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                className="bg-light"
                                name="password"
                                value={data.password ? data.password : ""}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label className="text-light">Gender</Form.Label>
                            <Form.Control 
                                as="select" 
                                custom
                                name="gender"
                                onChange={this.handleChange}
                            >   
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label className="text-light">Phone</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Phone" 
                                name="phone"
                                value={data.phone ? data.phone : ""}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label className="text-light">Address</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Address" 
                                name="address"
                                value={data.address ? data.address : ""}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.SelectCustom2">
                            <Form.Label className="text-light">Subscribe</Form.Label>
                            <Form.Control 
                                as="select" 
                                custom
                                name="subscribe"
                                value={data.subscribe ? data.subscribe : ""}
                                onChange={this.handleChange}
                            >
                                <option>choose</option>
                                <option>true</option>
                                <option>false</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.SelectCustom3">
                            <Form.Label className="text-light">Role</Form.Label>
                            <Form.Control 
                                as="select" 
                                custom
                                name="role"
                                value={data.role ? data.role : ""}
                                onChange={this.handleChange}
                            >
                                <option>Role</option>
                                <option>user</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Button type="submit" variant="light" size="lg" className="text-danger" block>
                            Register
                        </Button>
                        <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                        <div className="text-right mt-2">
                        <Button onClick={this.props.onHide} >Close</Button>
                        </div>
                    </Form>
                </Modal.Body>
            
            </Modal>

            
        );
    }
}


class HeaderMdetail extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false
        }

    }
    
    render(){   

        const {id, genre, status} = this.props;
        const { modalShow, modalRegister} = this.state;
        //console.log(id)
        let STATUS = status === 'admin' || 'user' ? false : true;
        let POS = status !== 'admin' ? false : true;

        return (
        <>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/" ><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="#" ><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="#" ><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav style={dumbFlix}>
                    <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>
                {
                    STATUS ? 
                    (<div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>):
                    (<div>
                        <DropdownButton
                        alignRight
                        title={<Image src={userPhoto} />}
                        id="dropdown-menu-align-right"
                        variant="dark"
                        >
                            <Dropdown.Item eventKey="1" href={"/logpay/profile/" + status} > <i className='fas fa-user' style={{width: 20}}></i> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="/logpay/pay"> <i className='fas fa-money-check-alt' style={{width: 20}}></i> Pay</Dropdown.Item>
                            {  POS && (<Dropdown.Item eventKey="3" href="/admin/007"> <i className='fas fa-chalkboard-teacher' style={{width: 20}}></i> Admin </Dropdown.Item>)}
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" 
                                onClick={() => {
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('role')
                                    localStorage.removeItem('id')
                                    } 
                                } 
                                href="/"> 
                                <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>)
                }
                </Form>
            </Navbar.Collapse>
            </Navbar>

            {
                <Banner ids={id} genres={genre} statusX={status} />
            }

            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})}
                auth={this.props.auth}
                login={this.props.login}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
                auth={this.props.auth}
                register={this.props.register}
            />
        </>
        );
    }
}


const dumbFlix = {
    marginRight: '39%'

};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { register, login })(HeaderMdetail);