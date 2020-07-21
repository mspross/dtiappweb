//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdDone, MdContactMail, MdComment, MdAccountCircle } from "react-icons/md";
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Notificacion from '../components/notificacion';
// CSS style sheet
import './css/style.css';
// Images
import Contacto from '../images/Bot_ini_verde.png';
//Object
export default class contacto extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            options: 0,
            linkhome: '/',
            user: undefined,
            email: undefined,
            comments: undefined,
            msgStatus: null,
            msgText: null
        }
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
                options: 2,
                user: '',
                email: '',
                comments: '',    
                msgStatus: res.data.status,
                msgText: 'Gracias por su comentario.'
            });
        }catch(error){
            this.setState({
                options: 1,
                user: '',
                email: '',
                comments: '',    
                msgText: 'Algo salio mal. Intente nuevamente, por favor.'
            });
        }
    }
    handleNotification = (_message, _options) => (<Notificacion message={_message} options={_options}/>);
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            options: 0
        })
    }
    handleReturn = e => {
        e.preventDefault();
        window.location = this.state.linkhome;
    }
    render(){
        const { msgText, options } = this.state;
        return(
            <div>
                {
                    options > 0 ? this.handleNotification(msgText, options) : ""
                }
                <section id="sec1">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 4 }}>
                                <img alt="cntacto" onClick={this.handleReturn} style={{width:'53vh', height:'40vh', paddingTop:'15px', cursor:'pointer'}} src={`${Contacto}`}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br />
                <section id="sec2">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h2 className="subtitulo">Nos gustar&iacute;a conocer su opini&oacute;n</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Card className="sombra relleno">
                                    <Card.Body>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Row>
                                                <MdAccountCircle style={{height:'5%', width:'5%'}} />
                                                <Form.Group as={Col} controlId="formBasicName">
                                                    <Form.Control 
                                                    type="text"
                                                    style={{fontSize: '1.1em'}}
                                                    placeholder="Nombre" 
                                                    maxLength="100" 
                                                    name="user" 
                                                    onChange={this.handleChange} 
                                                    value={this.state.user} 
                                                    autoComplete="off"
                                                    className="sombra"  
                                                    required/>
                                                </Form.Group>
                                                &nbsp;&nbsp;
                                                <MdContactMail style={{height:'5%', width:'5%'}} />
                                                <Form.Group as={Col} controlId="formBasicEmail">
                                                    <Form.Control 
                                                    type="text"
                                                    style={{fontSize: '1.1em'}}
                                                    placeholder="Correo electr&oacute;nico" 
                                                    name="email" 
                                                    onChange={this.handleChange} 
                                                    value={this.state.email} 
                                                    autoComplete="off" 
                                                    className="sombra" 
                                                    required/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <MdComment style={{height:'5%', width:'5%'}} />
                                                <Form.Group as={Col} controlId="formBasicComments">
                                                    <Form.Control 
                                                    as="textarea"
                                                    style={{fontSize: '1.1em'}}
                                                    placeholder="Comentarios" 
                                                    row="2"
                                                    name="comments"
                                                    onChange={this.handleChange} 
                                                    value={this.state.comments} 
                                                    autoComplete="off" 
                                                    className="sombra" 
                                                    required/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="outline-success" type="Submit" className="button" size="sm">Enviar&nbsp;&nbsp;<MdDone /></Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br/>
                <section id="sec3">
                    <Footer />
                </section>
            </div>
        )
    }
}

