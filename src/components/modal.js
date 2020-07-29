//Headers
import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
// CSS style sheet
import '../../src/pages/css/style.css';
//Images
import Proximamente from '../images/Proximamente.png';
//Class
export default class modalinfo extends Component {
    //Functions
    handleNext = () => {
        window.location = this.props.nextImage;
    }
    //Render Data
    render(){
        let _message = this.props.message;
        let _title = this.props.title;
        let _options = parseInt(this.props.options);
        let _image = this.props.image;
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
                                <Col md={{ span: 4, offset: 1 }}>
                                    <img alt="ruta1" className="imgcover" src={`${_image}`}></img>
                                </Col>
                                <Col md={{span: 4, offset: 1}}>
                                    <p className="texto" style={{width:'100%'}}>{`${_message}`}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-primary" className="button sombra btnText" size="sm" onClick={this.handleNext}>Continuar...</Button>
                    </Modal.Footer>
                </Modal>
            );
        }else if(_options === 2){
            return(
                <Modal {...this.props} dialogClassName="modal-90w" aria-labelledby="contained-modal-title-vcenter" size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="subtitulo">{`${_title}`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 4, offset: 1 }}>
                                    <img alt="ruta1" className="imgcover" src={`${_image}`}></img>
                                </Col>
                                <Col md={{span: 4, offset: 1}}>
                                    <p className="texto" style={{width:'100%'}}>{`${_message}`}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            );
        }
    }
}