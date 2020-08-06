//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/footer';
import APIConf from '../components/apiconfig';
import ModalM from '../components/modal';
import AvisoPriv from '../components/avisopriv';
import RutasGrid from '../components/rutasgrid';
// CSS style sheet
import './css/style.css';
import './css/aviso.css';
import './css/rutas.css';
// Images
import Cover from '../images/Pantalla_Rutas2.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isModal: false,
            isPrivacy: false,
            Items: null,
            routelink: '/',
            nextImage: '/dti/destinos',
            title: '',
            message: '',
            image: null,
            options: 0,
            status: 1
        }
    }
    //API Calls
    async UNSAFE_componentWillMount(){
        try{
            let fetchitems = await APIConf.get('/routes/status/'.concat(this.state.status));
            this.setState({
                isLoading: false,
                Items: fetchitems.data.data
            });
            console.log(fetchitems.data.data);
        }catch(error){
            this.setState({
                isLoading: false,
                Items: null
            });
        }
    }
    //Functions
    handleReturn = e => {
        e.preventDefault();
        window.location = this.state.routelink;
    }
    handleNext = e => {
        e.preventDefault();
        window.location = this.state.nextImage;
    }
    handleDestinos = e => {
        e.preventDefault();
        let _id = e.target.id;
        let _src = e.target.src;
        sessionStorage.setItem('Ruta', _id);
        this.setState({
            isModal: true,
            title: e.target.name,
            message: e.target.alt,
            options: 1,
            image: _src
        });
    }
    handleModalClose = () => {
        this.setState({
            isModal: false,
            title: '',
            options: 0
        });
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
    //Render
    render() {
        //JSX Code
        const { isLoading, isPrivacy, isModal, options, message, title, image, Items } = this.state;
        if(isModal){
            return(
                <ModalM show={isModal} onHide={this.handleModalClose} options={options} title={title} message={message} handleNext={this.handleNext} image={image} />
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
                                    <Image src={`${Cover}`} fluid rounded onClick={this.handleReturn} style={{cursor:'pointer'}} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <RutasGrid items={Items} isLoading={isLoading} handleDestinos={this.handleDestinos}/>
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
