//Headers
import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
// CSS style sheet
import '../../src/pages/css/style.css';
//Images
import Proximamente from '../images/Proximamente.png';
import Ruta1 from '../images/Ruta_01.png';
//Class
export default class modalinfo extends Component {
    //Functions
    handleNext = () => {
        window.location = "/";
    }
    //Render Data
    render(){
        let _message = this.props._message;
        let _title = this.props.title;
        let _options = parseInt(this.props.options);
        if(_options < 1){
            return(
                <Modal {...this.props} dialogClassName="modal-90w" aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="subtitulo">{`${_title}`}</Modal.Title>
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
            );
        }else if(_options === 1){
            return(
                <Modal {...this.props} dialogClassName="modal-90w" aria-labelledby="contained-modal-title-vcenter" size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="subtitulo">{`${_title}`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <img alt="ruta1" className="imgcover" src={`${Ruta1}`}></img>
                                    <p>{_message}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="button sombra" onClick={this.handleNext}>Conocer Destinos...</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    }
}