import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Dropdown, DropdownButton,  Col } from 'react-bootstrap';

import userPhoto from './data/user_photo.png';
import logoImage from './data/logo.png';

import "./input.css";


const inputFile = {
    file : {
        opacity: 0,
        position: 'absolute',
        marginTop: '-35px',
        width: '100%',
        zIndex: 999,
        overflow: 'auto'},
    file2 : {
        opacity: 0,
        position: 'absolute',
        marginTop: '1px',
        width: '100%',
        height: 45,
        zIndex: 999,
        overflow: 'auto'},    
    inputA: {
        width: '100%', 
        display:'inline'
    }
}



// Modal function 

function AddForm(props) {

    const { form } = props;

    return (
        <div>
            { form.map((formel,index) => {
                return (<div key={index}>{formel}</div>)
            })}
        </div>
    );
}


class AddFilm extends Component {

    constructor(){
        super()
        this.state = {
            formRow: []
        }

    }

    
    x = <div>
    <Form.Row className="pt-5 text-white">
        <Col md={9}>
            <Form.Control placeholder="Title Episode" />
        </Col>
        <Col className="pt-1 text-dark" >
            <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
            <Form.File id="exampleFormControlFile1" style={inputFile.file}/>
        </Col>
        </Form.Row>
        <Form.Row className="pt-3 text-white">
        <Col>
            <Form.Control placeholder="Link Film" />
        </Col>
    </Form.Row>
    </div>

    adder(){
        console.log('xxxxx')
        
        let xx = this.state.formRow
        let yy = this.x

        xx.push(yy)

        this.setState({formRow: xx})
    }


    render(){
        const { formRow} = this.state;
        let { status }  = this.props.match.params;

        let STATUS = status === 'admin' ? false : true; 

        return (
            <div style={{ width: '100%', height: '100%', paddingBottom: '50px' }} className="test">
        
                <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline className="ml-auto">
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
                            <Dropdown.Item eventKey="1" href="/logpay/profile" > <i className='fas fa-user' style={{width: 20}}></i> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="/logpay/pay"> <i className='fas fa-money-check-alt' style={{width: 20}}></i> Pay</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href="/admin/007"> <i className='fas fa-chalkboard-teacher' style={{width: 20}}></i> Admin </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>)
                }
                </Form>
            </Navbar.Collapse>
            </Navbar>

                <div className="ml-auto mr-auto rounded" style={{background: '#1F1F1F', width: 800, height: '100%', marginTop: 50}}>
                    <Form className="p-5">
                        <Form.Row className="pb-2">
                            <Col>
                                <h6 className="text-white">Add Film </h6>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col md={9}>
                                <Form.Control placeholder="Title" />
                            </Col>
                            <Col className="pt-1 text-dark" >
                                <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
                                <Form.File id="exampleFormControlFile1" style={inputFile.file}/>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control placeholder="Year" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3"  >
                            <Col>
                                <Form.Control as="select">
                                    <option>Category</option>
                                    <option>Tv Series</option>
                                    <option>Movies</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control as="textarea" rows="5" placeholder="Description" />
                            </Col>
                        </Form.Row>


                        <Form.Row className="pt-5 text-white">
                            <Col md={9}>
                                <Form.Control placeholder="Title Episode" />
                            </Col>
                            <Col className="pt-1 text-dark" >
                                <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
                                <Form.File id="exampleFormControlFile1" style={inputFile.file}/>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control placeholder="Link Film" />
                            </Col>
                        </Form.Row>


                         <AddForm form={formRow} />


                        <Form.Row className="pt-3 text-danger adder">
                            <Col>
                                <Button className="btn-light text-danger"  block onClick={() => this.adder()}> + </Button>
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3">
                            <Col md={9}>  
                            </Col>
                            <Col className="text-right">
                                <Button className="btn btn-outline-danger text-white" style={{background: '#E50914'}} block>Save</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                </div>
            </div>        
        );
    }
}


const dumbFlix = {
    textAlign: 'left'

};



export default AddFilm;
