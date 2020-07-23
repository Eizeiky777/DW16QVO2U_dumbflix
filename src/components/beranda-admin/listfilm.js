
import React, { Component } from 'react';
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';
import MovieList from './movielist';

class ListFilm extends Component {

    constructor(){
        super()
        this.state = {
            categoryFilm: ""
        }
    }
    
    onChange = (e) => {
        this.setState({categoryFilm: e})
    }
    

    render(){
        // console.log(this.state.categoryFilm);
        const { categoryFilm } = this.state;

        return (
            <>
            <Container className='py-5'>
                <Row>
                    <Col md={10} className="d-inline-flex text-white ">
                        <h1 className="pr-5">List Film</h1>
                        <Dropdown className="align-self-center">
                            <Dropdown.Toggle variant="outline-light" id="dropdown-basicA">
                                <span className="text-white">Category</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-list-film-js">
                                <Dropdown.Item eventKey="1" onClick={this.onChange.bind(this,"Tv Series")} className="text-white">TV Series</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={this.onChange.bind(this,"Movies")} className="text-white">Movies</Dropdown.Item>
                                {/* <Dropdown.Item eventKey="3" className="text-white">Commedy</Dropdown.Item>
                                <Dropdown.Item eventKey="4" className="text-white">Romance</Dropdown.Item>
                                <Dropdown.Item eventKey="5" className="text-white">Fight</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={2} className='text-right pt-2'>
                        <Button className="btn btn-outline-danger text-white" style={{background: '#E50914'}} block
                        href={"/add_film/admin/007"}
                        >Add Film</Button>
                    </Col>
                </Row>
            </Container>
            <div>
                <MovieList categoryFilm={categoryFilm} />
            </div>
            </>
        );
    }
}

export default ListFilm;















