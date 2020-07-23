
import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col, Button , Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './beranda-mdetail.css';

// import theWitcherBanner from './data/main_banner.png';
// import theJoker from './data/TV.png';
// import theLacasa from './data/lacasa_banner.png';

// import theWitcherTitle from './data/thw.png';
// import theJokerTitle from './data/joker.png';
// import theLacasaTitle from './data/lacasa.png';

// import TV from './data/data';
// import MOVIES from './data/dataMovies';
// import MOVIES_EPISODE from './data/dataMoviesEpisode';
// import MOVIES_EPISODE2 from './data/dataMoviesEpisode2';

import { connect } from "react-redux";
import { getTv, getDetailTv } from "../redux/actions/films";
import { getMovies } from "../redux/actions/movies";


const Banner = ({ ids=3, genres, statusX, getDetailTv, film:{ data: dataTv, error: dataerror}}) => {

    const [onKlik, setKlik] = useState(false);

    const onTest = () => {
        setKlik(true)
    }

    useEffect(() => {
        getDetailTv(ids);
    },[getDetailTv, ids]);
        
        const tv = Object.values(dataTv);
        console.log(tv[0]);


        if(dataerror){
            console.log(dataerror)
        }
        // const TT = genres === 'Tv Shows' ? TV : MOVIES;
        // const TT_E = genres === 'Tv Shows' ? MOVIES_EPISODE :  MOVIES_EPISODE2;
        const STATUS = statusX === 'admin' ? true : false;

        return (
        <>
                    {
                dataerror && (<div className="errorMessage">
                    <p>Please come back later, we still on process uploading latest episode </p>
                </div>)
            }
        <div style={{background: 'black'}}>
            <a href="#playing" onClick={onTest}><div style={{background: 'rgba(31, 31, 31, 0.3)', zIndex: 999, height: 540, width: '1680px', position: 'absolute' }}></div></a>
            <Container style={{height: 570}} className="py-3">
                <Row>
                    <Col xs={12} md={12}>
                        {   
                            tv.slice(0, 1).map( tvv => { 
                                return (
                                    <ReactPlayer url={tvv.linkFilm} playing={onKlik}  width='100%' height='500px' key={tvv.id} />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>

            <div className="tes" style={{backgroundColor: 'black', marginTop: '-34px'}}>
            <Container className="pb-5 pt-5">
                { STATUS ? (<div className="text-white pb-4 text-right"> 
                    <Button style={{background: '#E50914', width: 200 }} 
                        className="btn-outline-danger text-white" 
                        href={"/add_episode/" + ids + "/" + genres + "/" + statusX} >Add Episode
                    </Button>
                </div> ) : 
                (<div></div>) }
                <Row>
                    <Col xs={6} md={7}>
                        <Row>
                            <Col xs={12} md={4}>
                                {
                                    tv.slice(0, 1).map( tvv => { return (<Image src={`http://localhost:5000/public/${tvv.thumbnailFilm}`}  key={tvv.id} />) })
                                }   
                            </Col>
                            <Col xs={12} md={8}>
                                {
                                    tv.slice(0, 1).map( tvv => { return ( <h1 className='text-white' key={tvv.id}>{tvv.Film.title}</h1> ) })
                                }
                                {
                                    tv.slice(0, 1).map( tvv => { return ( 
                                        <div className='pb-3 text-secondary' key={tvv.id}>
                                            <span className='pr-3'>{tvv.Film.year}</span><span className="btn btn-outline-secondary" style={{width: 95}}> {tvv.Film.Category.name}</span>
                                        </div>    
                                    ) })
                                }
                                {
                                    tv.slice(0, 1).map( tvv => { return ( <h6 className="text-justify text-white font-weight-light" key={tvv.id} >{tvv.Film.description}</h6> ) })
                                }
                                
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={6} md={5} >
                        <div style={{border: '1px solid red', height: '250px'}}>
                        {   
                            STATUS ? (
                                <div style={{height: '100%'}}>
                                    <Carousel indicators={false} interval={999999999} style={{height: '100%'}}>
                                        {
                                            tv.map( tvv => { return ( 
                                                <Carousel.Item style={{height: '100%'}} key={tvv.id}>
                                                    <ReactPlayer url={tvv.linkFilm} playing={false} width='100%' height='100%'  controls={true} key={tvv.id}/>
                                                </Carousel.Item >
                                            )})
                                        }
                                    </Carousel>
                                </div>
                            ):
                            ( 
                                <div style={{height: '100%'}}>
                                    <Carousel indicators={false} interval={999999999} style={{height: '100%'}} >
                                        {
                                            tv.slice(0, 1).map( tvv => { return ( 
                                                <Carousel.Item style={{height: '100%'}} key={tvv.id}>
                                                    <ReactPlayer url={tvv.linkFilm} playing={false} width='100%' height='100%'  controls={true} key={tvv.id}/>
                                                </Carousel.Item >
                                            )})
                                        }
                                    </Carousel>
                                </div>
                            )
                        }

                        {
                            tv.slice(0, 1).map( tvv => { return ( <p className="text-white pt-4" key={tvv.id}>{tvv.Film.title} : {tvv.Film.Category.name}</p> )})
                        }
                        </div>
                    </Col>
                </Row>
            </Container>
                
            </div>
        </div>
        </>
        );
    
}

const mapStateToProps = (state) => {
    return {
        film: state.film,
        movies: state.movies
    };
};

export default connect(mapStateToProps, { getTv, getDetailTv, getMovies })(Banner);
