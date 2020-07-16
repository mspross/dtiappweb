//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup, Modal } from 'react-bootstrap';
import Footer from '../components/footer';
// CSS style sheet
import './css/style.css';
// Images
import Cover from '../images/Pantalla_Rutas2.png';
import Ruta1 from '../images/Ruta_01.png';
import Ruta2 from '../images/Ruta_02.png';
import Ruta3 from '../images/Ruta_03.png';
import Proximamente from '../images/Proximamente3.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            routelink: '/'
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
            isModal: true
        });
    }
    //Render
    render() {
        //JSX Code
        const { isModal } = this.state;
        if(isModal){
            return(
                <div>
                    <Modal show={isModal} onHide={() => this.setState({isModal: false})} dialogClassName="modal-90w" aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" className="subtitulo">Destinos Tur&iacute;sticos Inteligentes</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                            <Container fluid>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <img alt="proximamente" className="imgcover" src={`${Proximamente}`}></img>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                    </Modal>
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
                                    <Card className="cardbgRoutes1 text-center">
                                        <Card.Img variant="top" src={`${Ruta1}`} style={{height:'260px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
                                        <Card.Footer className="text-muted subtitulo footerText">Ruta Aventura</Card.Footer>
                                    </Card>
                                    <Card className="cardbgRoutes2 centro">
                                        <Card.Img variant="top" src={`${Ruta2}`} style={{height:'250px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
                                        <Card.Footer className="text-muted subtitulo footerText">Ruta 2</Card.Footer>
                                    </Card>
                                    <Card className="cardbgRoutes3 centro">
                                        <Card.Img variant="top" src={`${Ruta3}`} style={{height:'250px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
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
