//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/footer';
import APIConf from '../components/apiconfig';
import DestinosGrid from '../components/destinosgrid';
import AvisoPriv from '../components/avisopriv';
// CSS style sheet
import './css/style.css';
import './css/cards.css';
import './css/aviso.css';
// Images
import Cover from '../images/Pantalla_Destinos.png';
//Object
export default class cover extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            routelink: '/dti/rutas',
            Items: null,
            isPrivacy: false,
            routeID: sessionStorage.getItem("Ruta"),
            status: 1
        }
    }
    //API Calls
    async UNSAFE_componentWillMount(){
        this.setState({
            isLoading: true
        });
        try{
            let fetchItems = await APIConf.get('/destiny/route/'.concat(this.state.routeID).concat("/").concat(this.state.status));
            this.setState({
                isLoading: false,
                Items: fetchItems.data.data
            });
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
        const { isPrivacy, isLoading, Items } = this.state;
        if(isPrivacy){
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
                    <DestinosGrid items={Items} isLoading={isLoading} />
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
