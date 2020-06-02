import React, { Component } from 'react';
import { Jumbotron, Container, Image, Form, Button } from 'react-bootstrap';
import mainBanner from './data/main_banner.png';
import theWitcher from './data/thw.png';


class Banner extends Component {
    render(){
        
        const divWitcher = {
            width: "80vh"
        };

        const textWitcher = {
            color: "white",
            textShadow: "2px 2px 2px #000",
            marginTop: "15px",
            marginBottom: "15px"
        };

        const divStyle = {
            backgroundImage: `url(${mainBanner})`,
            backgroundSize: 'cover',
            width: "100%",
            height: "100vh",
            boxShadow: 'inset 0px -110px 20px rgba(0,0,0,0.5), 0 20px 52px #000'
        };

        const buttonWatch = {
            width: '200px',
            background: '#E50914',
            borderRadius: '5px',
            
        };

        return (
        <div>
            <Jumbotron style={divStyle} fluid>
                <Container className="pt-5" >
                    <Image src={theWitcher} style={divWitcher}/>
                    <div style={textWitcher}>
                    <p>
                    Geralt of Rivia, a solitary monster hunter, struggles to find his place in <br />
                    a world where people often prove more wicked than beast
                    </p>
                    <p className="d-inline-flex pr-3">2019</p><Button variant="outline-light"> TV Series </Button>
                    </div>
                    <Form >
                        <Button variant="btn btn-danger mr-3 text-light" style={buttonWatch}>
                            Watch Now !
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>
        </div>
        );
    }
}

export default Banner;
