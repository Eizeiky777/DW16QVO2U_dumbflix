    import React, { Component } from 'react';
    import CUSTOMER from './customer/customers';

    import { Container,Row,Col, Dropdown } from 'react-bootstrap';

    class App extends Component {
    render(){
        return (
        <div className="pb-5">
        <Container className='mt-5 text-left text-white font-weight-bold' style={{width: '100vh', height: 20, marginLeft:'15%'}}>
            <Row>
                <Col>
                    <h5>Incoming Transaction</h5>
                </Col>
            </Row>
        </Container>
        <Container className='my-5 pt-2 pb-3 bg-dark text-white' style={{width: 900, height: '100%'}}>
            <Row style={{fontSize: 14, color: '#E50914'}} className="py-2 text-left">
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
                let colorAct = '#FF0742'

                if ( statusX === 'Active' ){
                    color = '#0ACF83'
                }

                if ( paymentX === 'Active' || paymentX === 'Approved' ){
                    colorPay = '#0ACF83'
                }else if ( paymentX === 'Pending'){
                    colorPay = '#F7941E'
                }

                if ( actionX === 'Active' ){
                    colorAct = '#1C9CD2'
                }


            return <div key={customer.id} className="text-left">
                <hr style={{ height: 1, backgroundColor: '#7b7c78',width: ' 100%' }}/>
                <Row style={{fontSize: 14}} className="">
                    <Col md={1}  xs={1} className='pt-2'>
                        {customer.id}
                    </Col>
                    <Col md={2} xs={1} className='pt-2'>
                        {customer.users}
                    </Col>
                    <Col md={2} xs={1} className='pt-2'>
                        {customer.bukti}
                    </Col>
                    <Col md={2} xs={1} className='pt-2'>
                        {customer.remaining}
                    </Col>
                    <Col md={2} style={{color: `${color}`, fontWeight: 'bold'}} xs={1} className='pt-2'>
                        {customer.status}
                    </Col>
                    <Col md={2} style={{color: `${colorPay}`, fontWeight: 'bold'}} xs={1}>
                        <Dropdown >
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="caret">
                                <span style={{color: `${colorPay}`}}>{ paymentX }</span>
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
                    <Col md={1} xs={1} className='pt-2'>
                        <i className='fas fa-caret-down' style={{color: `${colorAct}`, fontSize: 18}}></i>
                    </Col>
                </Row>
            </div>
                })
            }
        </Container>
    </div>        
        );
    }
    }

    export default App;
