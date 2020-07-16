//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardGroup, Modal } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
// CSS style sheet
import './css/style.css';
// Images
import Cover from '../images/D.t.i._Hidalgo2.png';
import Dti from '../images/Dti_icontext.png';
import Rutas from '../images/rutasA.png';
import Registro from '../images/Bot_ini_azul.png';
import Noticias from '../images/Bot_ini_amarillo.png';
import Exploracion from '../images/Bot_ini_azulClaro.png';
import Contacto from '../images/Bot_ini_verde.png';
import Proximamente from '../images/Proximamente3.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isModal: false,
            isLoading: false,
            isError: false,
            isCommit: false,
            link: '/dti',
            linkcontacto: '',
            routelink: '/dti/rutas',
            user: undefined,
            email: undefined,
            comments: undefined,
            msgStatus: null,
            msgText: null
        }
    }
    //API Calls

    //Functions
    handleContacto = e => {
        e.preventDefault();
        window.location = "/dti/contacto";
    }
    handleRegistro = e => {
        e.preventDefault();
        window.location = "/dti/registro";
    }
    handleRoutes = e => {
        e.preventDefault();
        window.location = "/dti/rutas";
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        try{
            let res = await APIConf.post('/comentarios/add', {
                nombre: this.state.user,
                correo: this.state.email,
                comentario: this.state.comments
            });
            this.setState({
                isCommit: true,
                isError: false,
                user: '',
                email: '',
                comments: '',    
                msgStatus: res.data.status,
                msgText: 'Gracias por su comentario.'
            });
        }catch(error){
            if(error.response.data !== null){
                this.setState({
                    isCommit: false,
                    isError: true,
                    msgText: 'Uuupss!! Algo salio mal. Intente nuevamente, por favor.'
                })    
            }else{
                this.setState({
                    isCommit: false,
                    isError: true,
                    msgText: 'Uuupss!! Algo salio mal. Intente nuevamente, por favor.'
                })    
            }
        }
    }
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleCloseAlert = e => {
        e.preventDefault();
        this.setState({
            isCommit: false
        });
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
                                <img alt="cover" className="imgcover" src={`${Cover}`}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                 <section id="sec2">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" src={`${Dti}`} style={{height:'260px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Rutas}`} style={{height:'250px', width:'225px', cursor:'pointer'}} onClick={this.handleRoutes} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Registro}`} style={{height:'250px', width:'225px', cursor:'pointer'}} onClick={this.handleRegistro} />
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" src={`${Noticias}`} style={{height:'260px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Exploracion}`} style={{height:'260px', width:'225px', cursor:'pointer'}} onClick={this.handleModalException} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Contacto}`} style={{height:'260px', width:'225px', cursor:'pointer'}} onClick={this.handleContacto} />
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
