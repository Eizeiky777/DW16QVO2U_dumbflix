    import React, { Component } from 'react';
    import CUSTOMER from './customer/customers';

    import { Container,Row,Col, Dropdown } from 'react-bootstrap';

    class App extends Component {


    render(){

        let color_second = '#2B2B2B';
        let color_third = '#1F1F1F';
        let x = '';

        return (
            <div className="">
            <Container className='mt-5 text-left text-white font-weight-bold' style={{width: '100%', height: 20, marginLeft:'15%'}}>
                <Row>
                    <Col>
                        <h5>Incoming Transaction</h5>
                    </Col>
                </Row>
            </Container>
            <Container className='  mt-5 bg-dark text-white' style={{width: 900, height: '100%'}}>
                <Row style={{fontSize: 14, color: '#E50914', backgroundColor: '#1F1F1F'}} className="py-3 text-left  border-bottom border-light">
                    <Col md={1} xs={1}>
                    No
                    </Col>
                    <Col md={2} xs={1}>
                    Users
                    </Col>
                    <Col md={2} xs={1}>
                    Bukti Transfer
                    </Col>
                    <Col md={2} xs={1}>
                    Remaining Active
                    </Col>
                    <Col md={2} xs={1}>
                    Status User
                    </Col>
                    <Col md={2} xs={1}>
                    Status payment
                    </Col>
                    <Col md={1} xs={1}>
                    Action
                    </Col>
                </Row>
                {
                CUSTOMER.map( customer => { 
                    let statusX = customer.status
                    let paymentX = customer.payment
                    let actionX = customer.action
                    let color = '#FF0742'
                    let colorPay = '#FF0742'
                    let colorAct = '#1C9CD2'

                    if ( statusX === 'Active' ){
                        color = '#0ACF83'
                    }

                    if ( paymentX === 'Active' || paymentX === 'Approved' ){
                        colorPay = '#0ACF83'
                    }else if ( paymentX === 'Pending'){
                        colorPay = '#F7941E'
                    }

                    
                    x = customer.id % 2 === 1 ? (x = color_second) : (x = color_third)


                    return <div key={customer.id} className="text-left">
                        <Row style={{fontSize: 14, background: x }} className="my-0 dropdrop2   ">
                        
                            <Col md={1}  xs={1} className=' border-bottom border-light'>
                                {customer.id}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light'>
                                {customer.users}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light'>
                                {customer.bukti}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light'>
                                {customer.remaining}
                            </Col>
                            <Col md={2} style={{color: `${color}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light'>
                                {customer.status}
                            </Col>
                            <Col md={2} style={{color: `${colorPay}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light'>
                                <span style={{color: `${colorPay}`}}>{ paymentX }</span>
                            </Col>
                            <Col md={1} xs={1} className=' border-bottom border-light'>
                            <Dropdown >
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="caret dropdrop">
                                        <span><i className='fas fa-caret-down' style={{color: `${colorAct}`, fontSize: 18}}></i></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-list-js">
                                        <Dropdown.Item href="#/action-1" className="text-success">
                                                Approved
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="text-danger">
                                                Cancel
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="text-warning">
                                                Pending
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                </div>
                })
            }
        </Container>
        <div style={{height: 400}}></div>
    </div>        
        );
    }
    }

    export default App;
