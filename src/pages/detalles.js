//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Footer from '../components/footer';
import ModalM from '../components/modal'
// CSS style sheet
import './css/style.css';
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
            routelink: '/',
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
        sessionStorage.setItem('Destino', e.target.id);
        this.setState({
            isModal: true,
            title: e.target.name,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            options: 1,
            image: e.target.src
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
        const { isModal, options, message, title, image } = this.state;
        if(isModal){
            return(
                <div>
                    <ModalM show={isModal} onHide={this.handleModalClose} options={options} title={title} message={message} image={image} />
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
                                    <Card id="route1" className="text-center">
                                        <Card.Img variant="top" src={`${Negocio1}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" name="Mineral del Monte" onClick={this.handleDestinos} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio2}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio3}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" onClick={this.handleModalException} />
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup>
                                <Card id="route1" className="text-center">
                                        <Card.Img variant="top" src={`${Negocio4}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio5}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" onClick={this.handleModalException} />
                                    </Card>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={`${Negocio6}`} style={{height:'100%', width:'100%', cursor:'pointer'}} id="5e8f66b61c9d440000fb497d" onClick={this.handleModalException} />
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