//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
// CSS style sheet
import './css/style.css';
// Images
import Contacto from '../images/Bot_ini_verde.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            isError: false,
            isCommit:false,
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
                isLoading: false,
                isError: false,
                isCommit: true,
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
                    isLoading: false,
                    isError: true,
                    msgStatus: '400',
                    msgText: 'Uuupss!! Algo salio mal. Intente nuevamente, por favor.'
                })    
            }else{
                this.setState({
                    isCommit: false,
                    isLoading: false,
                    isError: true,
                    msgStatus: '400',
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
            isError: false,
            isLoading: false,
            isCommit: false,
        });
        window.location = "/";
    }
    render(){
        const { isError, isCommit, msgText } = this.state;
        return(
            <div>
                <section id="sec1">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 4 }}>
                                <img alt="cntacto" onClick={this.handleCloseAlert} style={{width:'55vh', height:'50vh', paddingTop:'15px', cursor:'pointer'}} src={`${Contacto}`}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <hr />
                <section id="sec2">
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
                                        {
                                            isError && <div onClick={this.handleCloseAlert} className={'alert alert-danger alerta'}>{msgText}</div>
                                        }
                                        {
                                            isCommit && <div onClick={this.handleCloseAlert} className={'alert alert-success alerta'}>{msgText}</div>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <hr />
                <section id="sec3">
                    <Footer />
                </section>
            </div>
        )
    }
}

