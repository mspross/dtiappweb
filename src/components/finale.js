//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdDone, MdContactMail, MdAccountCircle } from "react-icons/md";
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Notificacion from '../components/notificacion';
import Subcover from '../components/subcover';
// CSS style sheet
import '../pages/css/style.css';
// Images
import Cover from '../images/Dti_icontext.png';
//Object
export default class contacto extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            options: 0,
            linkhome: '/',
            linkreturn: '/dti/orden',
            user: undefined,
            email: undefined,
            msgStatus: null,
            msgText: null,
            orderItem: this.props.order
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        //Concat last data
        let _order = this.state.user.concat('|').concat(this.state.email).concat('|').concat(this.state.orderItem);
        try{
            let res = await APIConf.post('/orders/add', {
                orderID: this.state.user,
                name: this.state.email,
                order: _order
            });
            this.setState({
                options: 2,
                user: '',
                email: '',
                msgStatus: res.data.status,
                msgText: res.data.message
            });
            setTimeout(this.handleClearForm, 2500);
        }catch(error){
            this.setState({
                options: 1,
                user: '',
                email: '',
                msgText: 'Algo salio mal. Intente nuevamente, por favor.'
            });
        }
    }
    handleNotification = (_message, _options) => (<Notificacion message={_message} options={_options}/>);
    handleClearForm = () => { window.location = this.state.linkhome };
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
        window.location = this.state.linkreturn;
    }
    render(){
        const { msgText, options } = this.state;
        return(
            <div>
                {
                    options > 0 ? this.handleNotification(msgText, options) : ""
                }
                <section id="sec1">
                    <Subcover handleCloseSession={null} image={Cover}/>
                </section>
                <br />
                <section id="sec2">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h2 className="subtitulo">Destinos Tur&iacute;sticos Inteligentes - Conclusi&oacute;n</h2>
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
                                            <Button variant="outline-secondary" className="buttonForm sombra" size="sm" onClick={this.handleReturn}>Cancelar&nbsp;&nbsp;<MdDone /></Button>
                                            <Button variant="outline-success" type="Submit" className="buttonForm sombra" size="sm">Enviar&nbsp;&nbsp;<MdDone /></Button>
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
