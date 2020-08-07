//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup, Button, Image } from 'react-bootstrap';
import Footer from '../components/footer';
import Preorden from './preorden';
import AvisoPriv from '../components/avisopriv';
// CSS style sheet
import './css/style.css';
import './css/aviso.css';
// Images
import Cover from '../images/Negocios.jpg';
import Negocio1 from '../images/Hoteles1.png';
import Negocio2 from '../images/Ferias1.png';
import Negocio3 from '../images/Gastronomia1.png';
import Negocio4 from '../images/Cultura1.png';
import Negocio5 from '../images/Artesanias1.png';
import Negocio6 from '../images/Recomendados1.png';
//Object
export default class detalles extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            isPrivacy: false,
            routelink: '/dti/destinos',
            routePrev: '/dti/orden',
            image: '',
            travel: sessionStorage.getItem("Destino")
        }
    }
    //API Calls

    //Functions
    handleReturn = e => {
        e.preventDefault();
        window.location = this.state.routelink;
    }
    handleDestinos = e => {
        e.preventDefault();
        this.setState({
            isModal: true,
            image: e.target.src,
            type: e.target.id
        });
    }
    handleModalClose = () => {
        this.setState({
            isModal: false,
            image: '',
            type: ''
        });
    }
    handlePreview = e => {
        e.preventDefault();
        window.location = this.state.routePrev;
    }
    handleAviso = () => {
        this.setState({
            isPrivacy: true
        });
    }
    handleCloseAviso = e => {
        this.setState({
            isPrivacy: false
        });
    }
    //Render
    render() {
        //JSX Code
        const { isPrivacy, isModal, image, type, travel } = this.state;
        if(isPrivacy){
            return(
                <AvisoPriv handleClose={this.handleCloseAviso}/>
            )
        }else if(isModal){
            return(
                <div>
                    <Preorden image={image} typeOfBusiness={type} travelID={travel} handleModalClose={this.handleModalClose}/>
                </div>
            )
        }else{
            return (
                <div>
                <section id="sec1">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Image alt="cover" className="imgcover" src={`${Cover}`} onClick={this.handleReturn}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                 <section id="sec2">
                    <Container fluid>
                        <Row style={{paddingTop:'5px'}}>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup style={{gridGap:'.6rem'}}>
                                    <Card id="route1" className="text-center">
                                        <Card.Img variant="top" src={`${Negocio1}`} className="card-home-items" id="Hospedaje" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio2}`} className="card-home-items" id="Ferias-Eventos" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio3}`} className="card-home-items" id="Gastronomia" onClick={this.handleDestinos} />
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:'10px'}}>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup style={{gridGap:'.6rem'}}>
                                <Card id="route1" className="text-center">
                                        <Card.Img variant="top" src={`${Negocio4}`} className="card-home-items" id="Cultura-Recreacion" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio5}`} className="card-home-items" id="Artesanias" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio6}`} className="card-home-items" id="Recomendados" onClick={this.handleDestinos} />
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:'10px'}}>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="outline-primary" className="button sombra btnText" size="sm" onClick={this.handlePreview}>Revisar Destino Tur&iacute;stico...</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br />
                <section id="sec5">
                    <Footer />
                </section>
                <section id="6">
                    <span className="footer" style={{cursor:'pointer'}} onClick={this.handleAviso}>
                        Consulte nuestro&nbsp;<strong>aviso de privacidad</strong>
                    </span>
                </section>
                </div>
            )
        }
    }
}
