import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Movies from './movies/movies_';
import Tv from './tv/tv_';

class MovieList extends Component {
    render(){

        const setGambar = {
            width: '200px',
            height: '300px',
            border: '2px solid white'
        } 

        const divPembungkus = {
            backgroundColor: 'black',
            marginTop: -35,
            boxShadow: '-6px -42px 69px -8px rgba(0,0,0,0.75)',
            paddingBottom: 20
        }

        return (
        <div style={divPembungkus}>
            <Container className="pt-3">
                <div className="text-light" id="tv-show" >TV Series</div>
                <Row >
                    {
                        Tv.map( tvv => {
                            return <Col xs={6} md={2} className="m-3" key={tvv.id}>
                                        <Image src={tvv.image} style={setGambar} key={tvv.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{tvv.name}</p>
                                        <p className="text-muted text-font-weight-light">{tvv.year}</p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
                <div className="text-light" id="movies">Movies</div>
                <Row >
                    {
                        Movies.map( movie => {
                            return <Col xs={6} md={2} className="m-3" key={movie.id}>
                                        <Image src={movie.image} style={setGambar} key={movie.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{movie.name}</p>
                                        <p className="text-muted text-font-weight-light">{movie.year}</p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
        );
    }
}

export default MovieList;
