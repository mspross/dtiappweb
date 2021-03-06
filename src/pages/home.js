//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import ModalM from '../components/modal';
import AvisoPriv from '../components/avisopriv';
// CSS style sheet
import './css/style.css';
import './css/aviso.css';

// Images
import Cover from '../images/D.t.i._Hidalgo2.png';
import Dti from '../images/Dti_icontext.png';
import Rutas from '../images/rutasA.png';
import Registro from '../images/Bot_ini_azul.png';
import Noticias from '../images/Bot_ini_amarillo.png';
import Exploracion from '../images/Bot_ini_azulClaro.png';
import Contacto from '../images/Bot_ini_verde.png';
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
            isPrivacy: false,
            link: '/dti',
            linkcontacto: '',
            dtiMessage: '',
            routelink: '/dti/rutas',
            title: 'Destinos Turisticos Inteligentes',
            options: 0,
            user: undefined,
            email: undefined,
            comments: undefined,
            msgStatus: null,
            msgText: null,
        }
        sessionStorage.clear();
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
            isModal: true,
            options: 0
        });
    }
    handleModalClose = () => {
        this.setState({
            isModal: false,
            options: 0
        });
    }
    handleDti = e => {
        e.preventDefault();
        this.setState({
            isModal: true,
            options: 2,
            dtiMessage: "Un Destino Turístico Inteligente es un espacio innovador, accesible a todos, apoyado en una estructura tecnológica de vanguardia, que garantiza el desarrollo sostenible del territorio turístico, y facilita la interacción e integración del visitante con el entorno, incrementando la calidad de su experiencia en el destino",
            image: e.target.src
        });
    }
    //Render
    render() {
        //JSX Code
        const { isPrivacy, isModal, options, dtiMessage, image } = this.state;
        if(isModal){
            return(
                <div>
                    <ModalM show={isModal} onHide={this.handleModalClose} options={options} title={this.state.title} message={dtiMessage} image={image} handleModalClose={this.handleModalClose} />
                </div>
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
                                <Image src={`${Cover}`} fluid rounded />
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup style={{gridGap:'2rem'}}>
                                    <Card>
                                        <Card.Img variant="top" src={`${Dti}`} className="card-home-items" onClick={this.handleDti} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Rutas}`} className="card-home-items" onClick={this.handleRoutes} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Registro}`} className="card-home-items" onClick={this.handleRegistro} />
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CardGroup style={{gridGap:'2rem'}}>
                                    <Card>
                                        <Card.Img variant="top" src={`${Noticias}`} className="card-home-items" onClick={this.handleModalException} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Exploracion}`} className="card-home-items" onClick={this.handleModalException} />
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src={`${Contacto}`} className="card-home-items" onClick={this.handleContacto} />
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
