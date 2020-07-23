import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import Movies from './movies/movies_';
import MoviesExtras from './movies/moviesExtra';
// import Tv from './tv/tv_';
import TvExtra from './tv/tvExtra';

import { connect } from "react-redux";
import { getTv } from "../redux/actions/films";
import { getMovies } from "../redux/actions/movies";

// <Route path="/detail/:id/:genre/:status" component={Detail} />

class TvShow extends Component {

    componentDidMount(){
        this.props.getTv(1);
    }

    render(){
        const { start, end } = this.props;
        const { data: dataTv } = this.props.film;
        let y = Object.values(dataTv);
        // console.log(y)
        
        // let status = "sealed";
        // let tokens = localStorage.getItem('token');
        // let roles = localStorage.getItem('role');
        // if(tokens !== null || roles !== null  ) status = roles; 
        return(
            <>
                {   
                    // loading ? ( <h3>Registration ....</h3>) : error ? ( <p>{error.message}</p> ) : ( <h1>{dataX[0]}</h1> )
                    y.slice(start, end).map( tv => {
                            return (<Col xs={5} md={2} lg={2} className="" key={tv.id}>
                                        <a href={"/detail/"+ tv.id + "/" + tv.Category.name + "/" + this.props.status} >
                                            <Image src={`http://localhost:5000/public/${tv.thumbnailFilm}`} style={setGambar} key={tv.id} />
                                        </a>  
                                        <div className="pt-1">
                                            <p  className="text-white text-font-weight-bold">{tv.title}</p>
                                            <p className="text-muted text-font-weight-light">{tv.year}</p>
                                        </div>
                                    </Col>)
                        })
                }
            </>
        )
    }
}

class MoviesShow extends Component {

    componentDidMount(){
        this.props.getMovies(2);
    }

    render(){
        const { data: dataMovies } = this.props.movies;

        let yy = Object.values(dataMovies);

        return(
            <>
                {   
                    yy.slice(0, 6).map( mov => {
                            return (<Col xs={5} md={2} lg={2} className="" key={mov.id}>
                                        <Image src={`http://localhost:5000/public/${mov.thumbnailFilm}`} style={setGambar} key={mov.id} />
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{mov.title}</p>
                                        <p className="text-muted text-font-weight-light">{mov.year}</p>
                                        </div>
                                    </Col>)
                        })
                }
            </>
        )
    }
}

class MovieList extends Component {
        
    render(){
        let { ids, homi, status } = this.props;
        let start = 0;
        let end = 6;
        // let status = "sealed";
        // let tokens = localStorage.getItem('token');
        // let roles = localStorage.getItem('role');
        // if(tokens !== null || roles !== null  ) status = roles; 
        
        if( homi === "homes" ){
            this.displayTv = "flex";
            this.displayMovies = "flex";
            this.displayTvExtras = "none";
            this.displayMovieExtras = "none";
        }else if ( homi !== "homes" && ids === 2  ){
            this.displayTv = "flex";
            this.displayMovies = "none";
            this.displayTvExtras = "flex";
            this.displayMovieExtras = "none";
        }else{
            this.displayTv = "none";
            this.displayMovies = "flex";
            this.displayMovieExtras = "flex";
            this.displayTvExtras = "none";
        }

        const display = {
            tv:{
                display: `${this.displayTv}`
            },
            movies:{
                display: `${this.displayMovies}`
            },
            tvExtras:{
                display: `${this.displayTvExtras}`
            },
            moviesExtras:{
                display: `${this.displayMovieExtras}`
            }
        }

        return (
        <div style={divPembungkus}>
            
            <Container className="pt-3">
                <div className="text-light mb-2" id="tv-show" style={display.tv}>TV Series</div>
                <Row style={display.tv}>
                    {
                        <TvShow getTv={this.props.getTv} film={this.props.film} status={status} start={start} end={end}/>
                    }
                </Row>

                <Row style={display.tvExtras}>
                    {
                        TvExtra.map( tvvv => {
                            return <Col xs={5} md={3} lg={2} key={tvvv.id}>
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
                <div className="text-light mb-2" id="movies" style={display.movies}>Movies</div>
                <Row style={display.movies}>
                    {
                        <MoviesShow getMovies={this.props.getMovies} movies={this.props.movies} />
                    }
                </Row>

                <Row style={display.moviesExtras}>
                    {
                        MoviesExtras.map( movieExtra => {
                            return <Col xs={5} md={3} lg={2} key={movieExtra.id}>
                                        <Image src={movieExtra.image} style={setGambar} key={movieExtra.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{movieExtra.name}</p>
                                        <p className="text-muted text-font-weight-light">{movieExtra.year}</p>
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


const setGambar = {
    border: '2px solid white',
    width: '150px',
    heiight: '250px'
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

