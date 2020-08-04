//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import Footer from '../components/footer';
import ModalM from '../components/modal';
import AvisoPriv from '../components/avisopriv';
// CSS style sheet
import './css/style.css';
import './css/aviso.css';
// Images
import Cover from '../images/Pantalla_Rutas2.png';
import Ruta1 from '../images/Ruta_01.png';
import Ruta2 from '../images/Ruta_02.png';
import Ruta3 from '../images/Ruta_03.png';
import Ruta4 from '../images/Ruta_04.png';
import Ruta5 from '../images/Ruta_05.png';
import Ruta6 from '../images/Ruta_06.png';
import Ruta7 from '../images/Ruta_07.png';
import Ruta8 from '../images/Ruta_08.png';
import Ruta9 from '../images/Ruta_09.png';
import Ruta10 from '../images/Ruta_10.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            isPrivacy: false,
            routelink: '/',
            nextImage: '/dti/destinos',
            title: '',
            message: '',
            image: null,
            options: 0
        }
    }
    //API Calls

    //Functions
    handleReturn = e => {
        e.preventDefault();
        window.location = this.state.routelink;
    }
    handleNext = e => {
        e.preventDefault();
        //return <Redirect to={this.state.nextImage} />;
        window.location = this.state.nextImage;
    }
    handleModalException = e => {
        e.preventDefault();
        this.setState({
            isModal: true,
            title: 'Destinos Turisticos Inteligentes',
            options: 0
        });
    }
    handleDestinos = e => {
        e.preventDefault();
        let _id = e.target.id;
        let _src = e.target.src;
        sessionStorage.setItem('Ruta', _id);
        this.setState({
            isModal: true,
            title: e.target.name,
            message: 'Una ruta relativamente pequeña, pero con diversas opciones turísticas, históricas, paseos nocturnos, variedad gastronómica y diversas actividades recreativas. Esta ruta fue seleccionada como ruta prototipo por ser corta y de esta forma el trabajo con los negocios puede ser más dinámico.',
            options: 1,
            image: _src
        });
    }
    handleModalClose = () => {
        this.setState({
            isModal: false,
            title: '',
            options: 0
        });
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
        const { isPrivacy, isModal, options, message, title, image } = this.state;
        if(isModal){
            return(
                <ModalM show={isModal} onHide={this.handleModalClose} options={options} title={title} message={message} handleNext={this.handleNext} image={image} />
            )
        }else if(isPrivacy){
            return(
                <AvisoPriv handleClose={this.handleCloseAviso}/>
            )
        }else{
            return (
                <div>
                <section id="sec1">
                    <Container>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <Image src={`${Cover}`} fluid rounded onClick={this.handleReturn} style={{cursor:'pointer'}} />
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup>
                                    <Card id="route1" className="text-center">
                                        <Card.Img variant="top" src={`${Ruta1}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f96001c9d440000fb4981" name="Ruta 1" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta2}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="2" name="Ruta 2" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta3}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="3" name="Ruta 3" onClick={this.handleModalException} />
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta4}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="4" name="Ruta 4" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta5}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="5" name="Ruta 5" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta6}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="6" name="Ruta 6" onClick={this.handleModalException} />
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta7}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="7" name="Ruta 7" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta8}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="8" name="Ruta 8" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta9}`} style={{height:'250px', width:'225px', cursor:'pointer'}} id="9" name="Ruta 9" onClick={this.handleModalException} />
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Ruta10}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="10" name="Ruta 10" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">&nbsp;</Card>
                                    <Card className="text-center">&nbsp;</Card>
                                </CardGroup>
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
