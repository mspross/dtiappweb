//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardDeck, Modal, Form  } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
// CSS style sheet
import './css/style.css';
// Images
import Cover from '../images/FL_09.png';
import RutasCover from '../images/rutasA.png';
import HotelesCover from '../images/hotel1.png';
import GastronomiaCover from '../images/gastronomia.png';
import FeriasCover from '../images/ferias-eventos.png';
import CulturaCover from '../images/cultura.png';
import ArtesaniasCover from '../images/artesanias.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            isLoading: false,
            isError: false,
            link: '/dti',
            user: undefined,
            email: undefined,
            comments: undefined
        }
    }
    //API Calls

    //Functions
    handleKW = e => {
        e.preventDefault();
        this.setState({
            isModal: true
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        alert('Form submitted sucessfully!');
        window.location = this.state.link;
    }
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
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
                            <Modal.Title id="contained-modal-title-vcenter" className="subtitulo">Sab&iacute;a que...</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae undecommodi aspernatur enim, consectetur. Cumque deleniti temporibusipsam atque a dolores quisquam quisquam adipisci possimuslaboriosam. Quibusdam facilis doloribus debitis! Sit quasi quodaccusamus eos quod. Abqconsequuntur eaque quo rem! Mollitiareiciendis porro quo magni incidunt dolore amet atque facilis ipsumdeleniti rem!
                            </h4>
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
                <br /><hr /><br />
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
                <br /><hr /><br />
                <section id="sec3">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card body className="sombra relleno" border="light">
                                    <h2 className="subtitulo" onClick={this.handleKW} style={{cursor:'pointer'}}>Sab&iacute;a que...</h2>
                                    <span style={{fontSize:'1.4em'}}>Gravida dictum fusce ut placerat orci nulla pellentesque. Risus at ultrices mi tempus imperdiet nulla malesuada.</span>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br /><hr /><br />
                <section id="sec4">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h2 className="subtitulo">Nos gustar&iacute;a conocer su opini&oacute;n</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card className="sombra">
                                    <Card.Body>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="formBasicName">
                                                <Form.Control 
                                                type="text"
                                                style={{fontSize: '1.3em'}}
                                                placeholder="Ingrese su nombre" 
                                                maxLength="100" 
                                                name="user" 
                                                onChange={this.handleChange} 
                                                value={this.state.user} 
                                                autoComplete="off" 
                                                required/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control 
                                                type="text"
                                                style={{fontSize: '1.3em'}}
                                                placeholder="Ingrese su correo electr&oacute;nico" 
                                                name="email" 
                                                onChange={this.handleChange} 
                                                value={this.state.email} 
                                                autoComplete="off" 
                                                required/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicComments">
                                                <Form.Control 
                                                as="textarea"
                                                style={{fontSize: '1.3em'}}
                                                placeholder="Ingrese sus comentarios" 
                                                row="4"
                                                name="comments"
                                                onChange={this.handleChange} 
                                                value={this.state.comments} 
                                                autoComplete="off" 
                                                required/>
                                            </Form.Group>
                                            <Button variant="outline-success" type="Submit" className="button" size="sm">Enviar</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br /><hr /><br />
                </div>
            )
        }
    }
}
