import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import Movies from './movies/movies_';
// import MoviesExtras from './movies/moviesExtra';
// import Tv from './tv/tv_';
// import TvExtra from './tv/tvExtra';

import { connect } from "react-redux";
import { getTv } from "../redux/actions/films";
import { getMovies } from "../redux/actions/movies";


class MovieList extends Component {

    componentDidMount(){
        this.props.getTv(1);
        this.props.getMovies(2);
    }

    render(){
        const { categoryFilm } = this.props;
        // console.log(categoryFilm)

        const { data: dataTv } = this.props.film;
        const { data: dataMovies } = this.props.movies;

        let Tv     = Object.values(dataTv);
        let Movies = Object.values(dataMovies);

        // check genre by filter dropdown
        let XXX = categoryFilm === 'Movies' ? Movies : Tv;

        let role = localStorage.getItem('role');
        let genreXXX = categoryFilm === 'Movies' ? XXX.slice(0, 1).map (x => { return x.Category.name }) : XXX.slice(0, 1).map (x => { return x.Category.name });

        return (
        <div style={divPembungkus}>
            <Container className="pt-3">
                <div className="text-light mb-2" id="tv-show">{genreXXX}</div>
                <Row>
                    {   
                        XXX.map( x => {
                            return( <Col xs={5} md={3} lg={2} className=" mt-2" key={x.id}>
                                        <a href={"/detail/"+ x.id + "/" + x.Category.name + "/" + role } >
                                            <Image src={`http://localhost:5000/public/${x.thumbnailFilm}`} style={setGambar}/>
                                        </a>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{x.title}</p>
                                        <p className="text-muted text-font-weight-light">{x.year}</p>
                                        </div>
                                    </Col>
                                )
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


const mapStateToProps = (state) => {
    return {
        film: state.film,
        movies: state.movies
    };
};

export default connect(mapStateToProps, { getTv, getMovies })(MovieList);

