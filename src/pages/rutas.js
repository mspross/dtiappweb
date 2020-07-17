//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Footer from '../components/footer';
import ModalM from '../components/modal'
// CSS style sheet
import './css/style.css';
// Images
import Cover from '../images/Pantalla_Rutas2.png';
import Ruta1 from '../images/Ruta_01.png';
import Ruta2 from '../images/Ruta_02.png';
import Ruta3 from '../images/Ruta_03.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            routelink: '/',
            title: '',
            message: '',
            options: 0
        }
        sessionStorage.clear();
    }
    //API Calls

    //Functions
    handleReturn = e => {
        e.preventDefault();
        window.location = this.state.routelink;
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
        sessionStorage.setItem('Ruta', e.target.name);
        this.setState({
            isModal: true,
            title: 'Ruta Aventura',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            options: 1
        });
    }
    handleModalClose = () => {
        this.setState({
            isModal: false,
            title: '',
            options: 0
        });
    }
    //Render
    render() {
        //JSX Code
        const { isModal, options, message, title } = this.state;
        if(isModal){
            return(
                <div>
                    <ModalM show={isModal} onHide={this.handleModalClose} options={options} title={title} message={message} />
                </div>
            )
        }else{
            return (
                <div>
                <section id="sec1">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <img alt="cover" className="imgcover" src={`${Cover}`} onClick={this.handleReturn}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                 <section id="sec2">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup>
                                    <Card id="route1" className="cardbgRoutes1 text-center">
                                        <Card.Img variant="top" src={`${Ruta1}`} style={{height:'260px', width:'225px', cursor:'pointer'}} name="5e8f96001c9d440000fb4981" onClick={this.handleDestinos} />
                                        <Card.Footer className="text-muted subtitulo footerText">Ruta Aventura</Card.Footer>
                                    </Card>
                                    <Card className="cardbgRoutes2 centro">
                                        <Card.Img variant="top" src={`${Ruta2}`} style={{height:'250px', width:'225px', cursor:'pointer'}} name="2" onClick={this.handleModalException} />
                                        <Card.Footer className="text-muted subtitulo footerText">Ruta 2</Card.Footer>
                                    </Card>
                                    <Card className="cardbgRoutes3 centro">
                                        <Card.Img variant="top" src={`${Ruta3}`} style={{height:'250px', width:'225px', cursor:'pointer'}} name="3" onClick={this.handleModalException} />
                                        <Card.Footer className="text-muted subtitulo footerText">Ruta 3</Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br />
                <section id="sec5">
                    <Footer />
                </section>
                </div>
            )
        }
    }
}
