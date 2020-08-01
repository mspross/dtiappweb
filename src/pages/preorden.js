//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import NegociosGrid from '../components/negociosgrid';
import DisplayErr from '../components/error';
import Spinner from '../components/spinner';
//import ModalM from '../components/modal'
// CSS style sheet
import './css/cards.css';
//Object
export default class preorden extends Component {
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            Items: null,
            image: this.props.image,
            isLoading: true,
            isError: false,
            routehome: '/dti/detalles'
        }
    }
    //API Calls
    async UNSAFE_componentWillMount(){
        try{
            let fetchItems = await APIConf.get('/business/typetravel/'.concat(this.props.typeOfBusiness).concat('/').concat(this.props.travelID));
            this.setState({
                isLoading: false,
                Items: fetchItems.data.data
            });
        }catch(error){
            this.setState({
                isLoading: false,
                isError: true,
                msgStatus: "204",
                msgText: "¡¡ Uuupsss !! Algo salio mal. No hay informacion disponible"
            });
        }
    }
    //Functions

    //Render
    render() {
        //JSX Code
        const { image, Items, isLoading, isError, msgStatus, msgText } = this.state;
        if(isLoading){
            return(
                <Spinner />
            )
        }else if(isError){
            return(
                <DisplayErr status={msgStatus} message={msgText} handleCloseAlert={this.props.handleModalClose} />
            )
        }else{
            return (
                <div>
                    <section id="sec1">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 6, offset: 4 }}>
                                    <img alt="negocio" className="imgsubcover" src={`${image}`} onClick={this.props.handleModalClose}/>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <NegociosGrid items={Items} isLoading={isLoading} />
                    <br />
                    <section id="sec5">
                        <Footer />
                    </section>
                </div>
            )
        }
    }
}
