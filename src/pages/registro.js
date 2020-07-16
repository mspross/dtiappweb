//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Subcover from '../components/subcover';
import Notificacion from '../components/notificacion';
// CSS style sheet
import './css/style.css';
//Object
export default class login extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            linkhome: '/',
            linknegocio: '/dti/negocios/nuevo',
            options: 0,
            name: undefined,
            user: undefined,
            pwd: undefined,
            level: null,
            msgStatus: null,
            msgText: null,
            flag: false
        }
    }
    handleSubmitRegistro = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            options: 0
        });
        try{
            let _res = await APIConf.post('/user/sign', {
                userID: this.state.user,
                name: this.state.name,
                pwd: this.state.pwd,
                level: this.state.level
            });
            this.setState({
                isLoading: false,
                options: 2,
                user: '',
                name: '',
                pwd: '',
                level: '',
                msgStatus: _res.data.status,
                msgText: 'Registro exitoso!'
            });
        }catch(error){
            if(error.response.data !== null){
                this.setState({
                    isLoading: false,
                    options: 1,
                    msgStatus: error.response.data.status,
                    msgText: error.response.data.message    
                })    
            }else{
                this.setState({
                    isLoading: false,
                    options: 1,
                    msgStatus: '400',
                    msgText: 'Uuupss!! Algo salio mal. Intente nuevamente, por favor.'
                })    
            }
        }
    }
    handleSubmitLogin = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            options: 0
        });
        try{
            let _res = await APIConf.post('/login', {
                userID: this.state.user,
                userpwd: this.state.pwd,
            });
            sessionStorage.setItem('AuthID', _res.data.data._id);
            sessionStorage.setItem('Nombre', _res.data.data.usrname);
            sessionStorage.setItem('ID', _res.data.data.usrID);
            this.setState({
                isLoading: false,
                options: 2,
                user: '',
                pwd: '',
                msgStatus: _res.data.status,
                msgText: 'Usuario valido!'
            });
            window.location = this.state.linknegocio;
        }catch(error){
            if(error.response.data !== null){
                this.setState({
                    isLoading: false,
                    options: 1,
                    user: '',
                    pwd: '',
                    msgStatus: error.response.data.status,
                    msgText: error.response.data.message    
                })    
            }else{
                this.setState({
                    isLoading: false,
                    options: 1,
                    user: '',
                    pwd: '',
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
            [name]: value,
            options: 0
        })
    }
    handleReturn = e => {
        e.preventDefault();
        this.setState({
            isLoading: false,
            options: 0,
            flag: false
        });
    }
    handleCloseSession = e => {
        e.preventDefault();
        this.setState({
            isError: false,
            isLoading: false
        });
        window.location = "/";
    }
    handleRegistry = e => {
        e.preventDefault();
        this.setState({
            flag: true,
            options: 0
        });
    }
    handleClear = e => {
        e.preventDefault();
        this.setState({
            user: '',
            name: '',
            pwd: '',
            level: '',
            isLoading: false,
            options: 0
        });
    }
    handleNotification = (_message, _options) => (<Notificacion message={_message} options={_options}/>);
    //Render
    render(){
        const { msgText, flag, options } = this.state;
        if(!flag){
            return(
                <div>
                    {
                        options > 0 ? this.handleNotification(msgText, options) : ""
                    }
                    <section id="sec1">
                        <Subcover handleCloseSession={this.handleCloseSession} />
                    </section>
                    <hr />
                    <section id="sec2">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 4 }}>
                                    <h2 className="subtitulo">Inicio de Sesi&oacute;n</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 6, offset: 4 }}>
                                    <Card className="sombra relleno" style={{width:'63%'}}>
                                        <Card.Body>
                                            <Form onSubmit={this.handleSubmitLogin}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicEmail">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Usuario</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese su correo electr&oacute;nico" 
                                                        name="user" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.user} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPwd">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Contrase&ntilde;a</Form.Label>
                                                        <Form.Control 
                                                        type="password"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese su contrase&ntilde;a" 
                                                        name="pwd" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.pwd} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Button variant="outline-success" type="Submit" className="button" size="sm">Continuar...</Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <span style={{fontSize: '1.3em', cursor:'pointer'}} onClick={this.handleRegistry}>¿Desea anunciarse con nosotros? Registrese y participe</span>
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
        }else{
            return(
                <div>
                    {
                        options > 0 ? this.handleNotification(msgText, options) : ""
                    }
                    <section id="sec1">
                        <Subcover handleCloseSession={this.handleCloseSession} />
                    </section>
                    <hr />
                    <section id="sec2">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <h2 className="subtitulo">Nuevo Registro</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Card className="sombra relleno">
                                        <Card.Body>
                                            <Form onSubmit={this.handleSubmitRegistro}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicName">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Nombre</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese su nombre" 
                                                        maxLength="100" 
                                                        name="name" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.name} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicEmail">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Usuario</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese su correo electr&oacute;nico" 
                                                        name="user" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.user} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPwd">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Contrase&ntilde;a</Form.Label>
                                                        <Form.Control 
                                                        type="password"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese su contrase&ntilde;a" 
                                                        name="pwd" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.pwd} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicLevel">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Nivel Acceso</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.3em'}}
                                                        placeholder="Ingrese Nivel"
                                                        maxLength="1" 
                                                        name="level"
                                                        onChange={this.handleChange} 
                                                        value={this.state.level} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Button variant="outline-success" type="Submit" className="button" size="sm">Registrar</Button>
                                            </Form>
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
}
