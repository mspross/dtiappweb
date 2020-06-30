//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import APIConf from '../components/apiconfig';
// CSS style sheet
import './css/style.css';
// Images
import Cover from '../images/FL_09.png';
import RutasCover from '../images/rutas-small.png';
import DestinosCover from '../images/destinos-small.png'
import HotelesCover from '../images/hoteles.png';
import GastronomiaCover from '../images/gastronomia.png';
import FeriasCover from '../images/ferias-eventos.png';
import CulturaCover from '../images/cultura.png';
import ArtesaniasCover from '../images/artesanias.png';
import ContactoCover from '../images/contactanos.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            isError: false
        }
    }
    //API Calls

    //Functions

    //Render
    render() {
        //JSX Code
        return (
            <div>
            <section id="sec1">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <img alt="cover" className="imgcover" src={`${Cover}`}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card body className="sombra">
                                <h1 className="subtitulo">Destinos Tur&iacute;sticos Inteligentes</h1>
                                <span style={{fontSize:'1.4em'}}>Gravida dictum fusce ut placerat orci nulla pellentesque. Risus at ultrices mi tempus imperdiet nulla malesuada.</span>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br/>
            <section id="sec2">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <CardDeck>
                                <Card border="info" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${RutasCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Rutas</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                                <Card border="danger" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${HotelesCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Hoteles</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                                <Card border="success" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${GastronomiaCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Gastronom&iacute;a</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <CardDeck>
                                <Card border="secondary" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${FeriasCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Ferias</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                                <Card border="dark" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${CulturaCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Cultura</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                                <Card border="warning" bg='light' className="sombra">
                                    <Card.Img variant="top" src={`${ArtesaniasCover}`} style={{height:'110px', width:'190px'}} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:'1.7em'}}>Artesan&iacute;as</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">Conocer m&aacute;s...</Button>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
            </section>
            </div>
        )
    }
}
