import React, { Component } from 'react';
import { Jumbotron, Container, Image, Form, Button } from 'react-bootstrap';
import mainBanner from './data/main_banner.png';
import theWitcher from './data/thw.png';


class Banner extends Component {
    render(){
        
        const divWitcher = {
            width: "50vh"
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
                    <h1><Image src={theWitcher} style={divWitcher}/></h1>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                    <Form inline>
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
