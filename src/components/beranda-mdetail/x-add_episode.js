import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton, Col } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

import userPhoto from './data/user_photo.png';
import logoImage from './data/logo.png';

import { connect } from "react-redux";
import { postEpisodeTvMovie } from "../redux/actions/addTvAndMovie";


// const Banner = ({ ids=3, genres, statusX, getDetailTv, film:{ data: dataTv}}) => {

//     const [onKlik, setKlik] = useState(false);

//     const onTest = () => {
//         setKlik(true)
//     }

    // useEffect(() => {
    //     getDetailTv(ids);
    // },[getDetailTv, ids]);
        
        // const tv = Object.values(dataTv);
        // console.log(tv[0]);

        // const TT = genres === 'Tv Shows' ? TV : MOVIES;
        // const TT_E = genres === 'Tv Shows' ? MOVIES_EPISODE :  MOVIES_EPISODE2;
        // const STATUS = statusX === 'admin' ? true : false;


const AddEpisode = ({ match, postEpisodeTvMovie, addTvAndMovie:{ data: addEpisodeX}}) =>  {
    
    const { id, status }  = match.params;
    const [dataAddEpisode, setAdd] = useState({});

    /////// backend handling /////// ----------------------------------
    const handleChangeEpisode = (event) => {
        // console.log(event.target.value)
        setAdd({ ...dataAddEpisode, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value })
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.state.dataAdd)
        console.log(dataAddEpisode)
        postEpisodeTvMovie(dataAddEpisode, id);
        setAdd({})
    };

        const addX = Object.values(addEpisodeX);
        let STAT = localStorage.getItem('role');
        let STATUS = status === 'admin' ? false : true; 

        return (
            <div style={{background: 'black', width: '100%', height: '800px' }}>

            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav style={dumbFlix}>
                <a href="/"><Image src={logoImage} fluid /></a>
                </Nav>
                
                <Form inline className="ml-auto">
                {
                    STATUS ? 
                    (<div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}}>Login</Button>
                    </div>):
                    (<div>
                        <DropdownButton
                        alignRight
                        title={<Image src={userPhoto} />}
                        id="dropdown-menu-align-right"
                        variant="dark"
                        >
                            <Dropdown.Item eventKey="1" href={"/logpay/profile/"+STAT}> <i className='fas fa-user' style={{width: 20}}></i> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href={"/logpay/pay/"+STAT}> <i className='fas fa-money-check-alt' style={{width: 20}}></i> Pay</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href={"/admin/007/"+STAT}> <i className='fas fa-chalkboard-teacher' style={{width: 20}}></i> Admin </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" 
                                onClick={() => {
                                    localStorage.removeItem('token') 
                                    localStorage.removeItem('role')
                                    localStorage.removeItem('id')
                                }}
                            href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>)
                }
                </Form>
            </Navbar.Collapse>
            </Navbar>

                <div className="ml-auto mr-auto rounded" style={{background: '#1F1F1F', width: 800, height: 350, marginTop: 50}}>
                    <Form className="p-5" onSubmit={handleSubmit} >
                        <Form.Row className="pb-2">
                            <Col>
                                <h2 className="text-white">Add Episode </h2>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col md={9}>
                                <Form.Control
                                    type="text"
                                    name="titleEpisode"
                                    placeholder="Title Episode"
                                    value={dataAddEpisode.titleEpisode ? dataAddEpisode.titleEpisode : ""}
                                    onChange={handleChangeEpisode} 
                                />
                            </Col>
                            <Col className="pt-1 text-dark" >
                                <Form.Control placeholder="Attach Thumbnail" style={{marginTop: '-5px'}}/>
                                <Form.File id="exampleFormControlFile1" style={inputFile.file}
                                    type="file"
                                    name="fileEpisode"
                                    onChange={handleChangeEpisode} 
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3 text-white">
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="linkEpisode"
                                    placeholder="Link Film"
                                    value={dataAddEpisode.linkEpisode ? dataAddEpisode.linkEpisode : ""}
                                    onChange={handleChangeEpisode} 
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row className="pt-3">
                            <Col md={9}>
                                
                            </Col>
                            <Col className="text-right">
                                <Button className="btn btn-outline-danger text-white" style={{background: '#E50914'}} type="submit" block>Add</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>

            </div>        
        );
    }


const dumbFlix = {
    textAlign: 'left'

};

const inputFile = {
    file : {
    opacity: 0,
    position: 'absolute',
    marginTop: '-35px',
    width: '100%',
    zIndex: 999,
    overflow: 'auto'},

    inputA: {
        width: '100%', 
        display:'inline'
    }
}

const mapStateToProps = (state) => {
    return {
        addTvAndMovie: state.addTvAndMovie
    };
};

export default connect(mapStateToProps, {  postEpisodeTvMovie })(AddEpisode);

