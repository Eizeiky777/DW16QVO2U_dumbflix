import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import Movies from './movies/movies_';
// import MoviesExtras from './movies/moviesExtra';
import Tv from './tv/tv_';
import TvExtra from './tv/tvExtra';


class MovieList extends Component {
    render(){

        return (
        <div style={divPembungkus}>
            <Container className="pt-3">
                
                <div className="text-light" id="tv-show">TV Series</div>
                <Row>
                    {
                        Tv.map( tvv => {
                            return <Col xs={5} md={3} lg={2} className=" mt-2" key={tvv.id}>
                                        <a href={"/detail/"+ tvv.id + "/" + tvv.genre + "/admin"} ><Image src={tvv.image} style={setGambar} key={tvv.id}/></a>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{tvv.name}</p>
                                        <p className="text-muted text-font-weight-light">{tvv.year}</p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>

                <Row>
                    {
                        TvExtra.map( tvvv => {
                            return <Col xs={5} md={3} lg={2} className="" key={tvvv.id}>
                                        <Image src={tvvv.image} style={setGambar} key={tvvv.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{tvvv.name}</p>
                                        <p className="text-muted text-font-weight-light">{tvvv.year}</p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>

                <hr className="bg-white" />
            </Container>
        </div>
        );
    }
}


const setGambar = {
    border: '2px solid white',
    width: '150px',
    height: '250px'
} 

const divPembungkus = {
    backgroundColor: 'black',
    marginTop: -35,
    boxShadow: '-6px -42px 69px -8px rgba(0,0,0,0.75)',
    paddingBottom: 20,
    
}

export default MovieList;
