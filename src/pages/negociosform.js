//Header
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Subcover from '../components/subcover';
import Notificacion from '../components/notificacion';
import AvisoPriv from '../components/avisopriv';
//Style Sheet
import './css/style.css';
import './css/aviso.css';
//Imagees
import Registro from '../images/Bot_ini_azul.png';
//Class
export default class nuevosnegocios extends Component {
    //Constructor
    constructor(props){
        super(props);
        toast.configure();
        this.state = {
            isLoading: false,
            isError: false,
            ischeckinout: false,
            isopenclose: false,
            isPrivacy: false,
            msgStatus: null,
            msgText: null,
            travelItem: null,
            status: 1,
            options: 0,
            name: undefined,
            address: undefined,
            email: undefined,
            description: undefined,
            phone: undefined,
            typeOfBusiness: undefined,
            sign: '0x9',
            manager: 'Default',
            file: undefined,
            checkinout: undefined,
            openclose: undefined,
            item1: '',
            item2: '',
            item3: '',
            item4: '',
            item5: '',
            pricelevel: undefined,
            travelID: null,
            linkhome: '/',
            linkrefresh: '/dti/negocios/nuevo'
        }
    }
    //API Calls
    async UNSAFE_componentWillMount(){
        try{
            let fetchItems = await APIConf.get('/destiny/status/'.concat(this.state.status));
            this.setState({
                travelItem: fetchItems.data.data
            });
        }catch(error){
            this.setState({
                travelItem: null
            });
        }
    }
    //Functions
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            options: 0
        })
    }
    handleListFile = e => {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
            options: 0
        });
    }
    handleChangeCombo = e => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({
            typeOfBusiness: e.target.value,
            ischeckinout: (value === "Hospedaje" ? true : false),
            isopenclose: (value !== "Hospedaje" ? true : false),
            options: 0
        })
    }
    handleCloseSession = async e => {
        e.preventDefault();
        try{
            let logout = await APIConf.post('/logout', {
                id: sessionStorage.getItem('AuthID')
            });
            console.log(logout);
        }catch(error){
            console.log(error);
        }
        sessionStorage.clear();
        window.location = this.state.linkhome;
    }
    handleNotification = (_message, _options) => (<Notificacion message={_message} options={_options}/>);
    handleClearForm = () => { window.location = this.state.linkrefresh };
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            options: 0
        });
        const types = ['image/png', 'image/jpeg', 'image/gif'];
        const imgFile = this.state.file;
        if(imgFile.size > 1000000){
            this.setState({
                msgText: `'${imgFile.name}' demasiado grande, por favor, seleccione otra imagen`,
                options: 1
            });
        }else if(types.every(type => imgFile.type !== type)){
            this.setState({
                msgText: `'${imgFile.name}' formato no soportado`,
                options: 1
            });
        }else if(parseInt(this.state.travelID) === -1 || parseInt(this.state.travelID) === 0 ){
            this.setState({
                msgText: 'Seleccione un Destino por favor',
                options: 1
            });
        }else{
            try{
                //Prepare object
                const formData = new FormData()
                formData.append('imagen1', imgFile);
                //Upload image to server
                let _imgUp = await APIConf.post('/upload', formData);
                //Gather image hashed
                let _result = await APIConf.post('/business/add', {
                    name: this.state.name, 
                    address: this.state.address,
                    email: this.state.email,
                    desc: this.state.description,
                    phone: this.state.phone,
                    type: this.state.typeOfBusiness,
                    sign: sessionStorage.getItem('AuthID').concat(sessionStorage.getItem('Nombre')).concat(sessionStorage.getItem('ID')),
                    manager: sessionStorage.getItem('Nombre'),
                    imageold: _imgUp.data.data,
                    imagenew: _imgUp.data.data,
                    openclose: this.state.openclose || 'empty',
                    checkinout: this.state.checkinout || 'empty',
                    item1: this.state.item1 || 'empty',
                    item2: this.state.item2 || 'empty',
                    item3: this.state.item3 || 'empty',
                    item4: this.state.item4 || 'empty',
                    item5: this.state.item5 || 'empty',
                    price: this.state.pricelevel,
                    travelID: this.state.travelID
                });
                this.setState({
                    isError: false,
                    isCommit: true,
                    msgText: _result.data.message,
                    options: 2
                });
                setTimeout(this.handleClearForm, 2500);
            }catch(error){
                this.setState({
                    isError: true,
                    isCommit: false,
                    msgText: error.response.data.message,
                    options: 1
                });
            }
        }
    }
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
        const { isPrivacy, options, msgText, ischeckinout, isopenclose, travelItem } = this.state;
        let opciones = travelItem === null ? (<option value="-1" id="9">Destinos no disponibles</option>) : (travelItem.map(item => <option value={item._id} id={item._id}>{item.dti_name}</option>));
        if(isPrivacy){
            return(
                <AvisoPriv handleClose={this.handleCloseAviso}/>
            )
        }else{
            return(
                <div>
                    {
                        options > 0 ? this.handleNotification(msgText, options) : ""
                    }
                    <section id="sec1">
                        <Subcover handleCloseSession={this.handleCloseSession} image={Registro} /> 
                    </section>
                    <br />
                    <section id="sec2">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 4 }}>
                                    <h2 className="subtitulo">Nuevo Registro</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Card className="sombra relleno">
                                        <Card.Body>
                                            <Form name="frmRegistro" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart1">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Nombre Negocio</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        placeholder="Nombre" 
                                                        maxLength="100" 
                                                        name="name" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.name} 
                                                        autoComplete="off"
                                                        className="sombra"
                                                        required/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart2">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Direcci&oacute;n Negocio</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        placeholder="Direcci&oacute;n" 
                                                        maxLength="100" 
                                                        name="address" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.address} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart3">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Correo Negocio</Form.Label>
                                                        <Form.Control 
                                                        type="email"
                                                        placeholder="nombre@dominio.com" 
                                                        maxLength="100" 
                                                        name="email" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.email} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart4">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Descripci&oacute;n Negocio</Form.Label>
                                                        <Form.Control 
                                                        as="textarea"
                                                        rows= "2"
                                                        placeholder="Descripci&oacute;n breve" 
                                                        name="description" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.description} 
                                                        autoComplete="off"
                                                        className="sombra"
                                                        style={{fontSize:'1.3em'}} 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart5">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Tel&eacute;fono Negocio</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        placeholder="xxx-xxx-xxx" 
                                                        name="phone" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.phone} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart6">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Tipo Negocio</Form.Label>
                                                        <Form.Control 
                                                        as="select"
                                                        name="typeOfBusiness" 
                                                        onChange={this.handleChangeCombo} 
                                                        autoComplete="off"
                                                        className="sombra"
                                                        style={{fontSize: '1.3em'}} 
                                                        required>
                                                            <option value="0" id="0">--- Seleccione opci&oacute;n ---</option>
                                                            <option value="Hospedaje" id="1">Hospedaje</option>
                                                            <option value="Gastronomia" id="2">Gastronom&iacute;a</option>
                                                            <option value="Cultura-Recreacion" id="3">Cultura Recreaci&oacute;n</option>
                                                            <option value="Ferias-Eventos" id="4">Ferias Eventos</option>
                                                            <option value="Artesanias" id="5">Artesanias</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart7">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Imagen Negocio</Form.Label>
                                                        <Form.Control 
                                                        type="file"
                                                        accept="image/*"
                                                        name="file" 
                                                        onChange={this.handleListFile} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart8">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Entrada - Salida</Form.Label>
                                                        {ischeckinout ? (
                                                            <Form.Control 
                                                            type="text"
                                                            placeholder="##:## - ##:##" 
                                                            name="checkinout" 
                                                            onChange={this.handleChange} 
                                                            value={this.state.checkinout} 
                                                            autoComplete="off"
                                                            className="sombra"
                                                            required/>
                                                            ) : (
                                                            <Form.Control 
                                                            type="text"
                                                            placeholder="##:## - ##:##" 
                                                            name="checkinout" 
                                                            onChange={this.handleChange} 
                                                            value={this.state.checkinout} 
                                                            autoComplete="off"
                                                            className="sombra"
                                                            disabled/>
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart9">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Abierto - Cerrado</Form.Label>
                                                        {isopenclose ? (
                                                            <Form.Control 
                                                            type="text"
                                                            placeholder="##:## - ##:##" 
                                                            name="openclose" 
                                                            onChange={this.handleChange} 
                                                            value={this.state.openclose} 
                                                            autoComplete="off"
                                                            className="sombra"
                                                            required/>
                                                            ) : (
                                                            <Form.Control 
                                                            type="text"
                                                            placeholder="##:## - ##:##" 
                                                            name="openclose" 
                                                            onChange={this.handleChange} 
                                                            value={this.state.openclose} 
                                                            autoComplete="off"
                                                            className="sombra"
                                                            disabled/>
                                                        )}
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart10">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Precio</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="5"
                                                        placeholder="$" 
                                                        name="pricelevel" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.pricelevel} 
                                                        autoComplete="off"
                                                        className="sombra" 
                                                        required/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart10">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Anexo 1</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="100"
                                                        name="item1" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.item1} 
                                                        autoComplete="off"
                                                        className="sombra"/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart10">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Anexo 2</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="100"
                                                        name="item2" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.item2} 
                                                        autoComplete="off"
                                                        className="sombra"/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart10">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Anexo 3</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="100"
                                                        name="item3" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.item3} 
                                                        autoComplete="off"
                                                        className="sombra"/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart11">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Anexo 4</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="100"
                                                        name="item4" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.item4} 
                                                        autoComplete="off"
                                                        className="sombra"/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formBasicPart11">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Anexo 5</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        maxLength="100"
                                                        name="item5" 
                                                        onChange={this.handleChange} 
                                                        value={this.state.item5} 
                                                        autoComplete="off"
                                                        className="sombra"/>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formBasicPart11">
                                                        <Form.Label style={{fontSize: '1.3em'}}>Destinos</Form.Label>
                                                        <Form.Control 
                                                        as="select"
                                                        name="travelID" 
                                                        onChange={this.handleChange} 
                                                        autoComplete="off"
                                                        className="sombra"
                                                        style={{fontSize: '1.3em'}} 
                                                        required>
                                                        <option value="0" id="0">--- Seleccione Destino ---</option>
                                                        { opciones }
                                                        </Form.Control>
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
                    <br />
                    <section id="sec9">
                        <Footer/>
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
