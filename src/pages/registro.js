//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdContactMail, MdFingerprint, MdLaunch, MdLightbulbOutline, MdAccountCircle } from "react-icons/md";
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Subcover from '../components/subcover';
import Notificacion from '../components/notificacion';
import AvisoPriv from '../components/avisopriv';
// CSS style sheet
import './css/style.css';
import './css/aviso.css';
//Images
import Registro from '../images/Bot_ini_azul.png';
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
            pwd2:undefined,
            level: 1,
            msgStatus: null,
            msgText: null,
            flag: false,
            isPrivacy: false
        }
    }
    handleSubmitRegistro = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            options: 0
        });        
        //Validate mails
        let _pwd1 = this.state.pwd;
        let _pwd2 = this.state.pwd2;
        if(_pwd1 === _pwd2){
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
                    pwd2:'',
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
        }else{
            this.setState({
                isLoading: false,
                options: 1,
                msgStatus: '409',
                msgText: 'Las contraseñas no son iguales',
                user: '',
                name: '',
                pwd: '',
                pwd2:'',
            })    
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
            if(error.response === undefined){
                this.setState({
                    isLoading: false,
                    options: 1,
                    user: '',
                    pwd: '',
                    msgStatus: '500',
                    msgText: 'Uuupss!! Algo salio mal. Intente nuevamente, por favor.'
                })    
            }else{
                this.setState({
                    isLoading: false,
                    options: 1,
                    user: '',
                    pwd: '',
                    msgStatus: error.response.data.status,
                    msgText: error.response.data.message    
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
            isLoading: false,
            options: 0
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
    handleAviso = () => {
        this.setState({
            isPrivacy: true,
            options: 0
        });
    }
    handleCloseAviso = e => {
        this.setState({
            isPrivacy: false,
            options: 0
        });
    }
    //Render
    render(){
        const { isPrivacy, msgText, flag, options } = this.state;
        if(isPrivacy){
            return(
                <AvisoPriv handleClose={this.handleCloseAviso}/>
            )
        }else if(!flag){
            return(
                <div>
                    {
                        options > 0 ? this.handleNotification(msgText, options) : ""
                    }
                    <section id="sec1">
                        <Subcover handleCloseSession={this.handleCloseSession} image={Registro}/>
                    </section>
                    <br />
                    <section id="sec2">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 4 }}>
                                    <h2 className="subtitulo">Inicio de Sesi&oacute;n</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Card className="sombra relleno">
                                        <Card.Body>
                                            <Form onSubmit={this.handleSubmitLogin}>
                                            <Form.Row>
                                                <MdContactMail style={{height:'8%', width:'8%'}} />
                                                <Form.Group as={Col} controlId="formBasicEmail">
                                                    <Form.Control 
                                                    type="email"
                                                    style={{fontSize: '1.1em'}}
                                                    placeholder="Correo electr&oacute;nico" 
                                                    maxLength="100" 
                                                    name="user" 
                                                    onChange={this.handleChange} 
                                                    value={this.state.user} 
                                                    autoComplete="off"
                                                    className="sombra"  
                                                    required/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <MdFingerprint style={{height:'8%', width:'8%'}} />
                                                <Form.Group as={Col} controlId="formBasicPwd">
                                                    <Form.Control 
                                                    type="password"
                                                    style={{fontSize: '1.1em'}}
                                                    placeholder="Contrase&ntilde;a" 
                                                    name="pwd" 
                                                    onChange={this.handleChange} 
                                                    value={this.state.pwd} 
                                                    autoComplete="off" 
                                                    className="sombra" 
                                                    required/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="outline-success" type="Submit" className="button" size="sm">Validar...&nbsp;&nbsp;&nbsp;<MdLaunch /></Button>
                                            </Form>
                                            <br/>
                                            <MdLightbulbOutline style={{height:'5%', width:'5%'}}/>
                                            <span style={{fontSize: '1.3em', cursor:'pointer'}} onClick={this.handleRegistry}>¿Desea anunciarse con nosotros? Registrese y participe</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <br />
                    <section id="sec3">
                        <Footer />
                    </section>
                    <section id="6">
                        <span className="footer" style={{cursor:'pointer'}} onClick={this.handleAviso}>
                            Consulte nuestro&nbsp;<strong>aviso de privacidad</strong>
                        </span>
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
                        <Subcover handleCloseSession={this.handleCloseSession} image={Registro}/>
                    </section>
                    <br />
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
                                                    <MdAccountCircle style={{height:'5%', width:'5%'}}/>
                                                    <Form.Group as={Col} controlId="formBasicName">
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.1em'}}
                                                        placeholder="Nombre" 
                                                        maxLength="100" 
                                                        name="name" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.name} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    &nbsp;&nbsp;
                                                    <MdContactMail style={{height:'5%', width:'5%'}}/>
                                                    <Form.Group as={Col} controlId="formBasicEmail">
                                                        <Form.Control 
                                                        type="text"
                                                        style={{fontSize: '1.1em'}}
                                                        placeholder="Correo electr&oacute;nico" 
                                                        name="user" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.user} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <MdFingerprint style={{height:'5%', width:'5%'}}/>
                                                    <Form.Group as={Col} controlId="formBasicPwd">
                                                        <Form.Control 
                                                        type="password"
                                                        style={{fontSize: '1.1em'}}
                                                        placeholder="Contrase&ntilde;a" 
                                                        name="pwd" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.pwd} 
                                                        autoComplete="off" 
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    &nbsp;&nbsp;
                                                    <MdFingerprint style={{height:'5%', width:'5%'}}/>
                                                    <Form.Group as={Col} controlId="formBasicPwd2">
                                                        <Form.Control 
                                                        type="password"
                                                        style={{fontSize: '1.1em'}}
                                                        placeholder="Contrase&ntilde;a" 
                                                        name="pwd2" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.pwd2} 
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
                    <br/>
                    <section id="sec3">
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
