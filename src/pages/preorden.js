//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import NegociosGrid from '../components/negociosgrid';
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
            imgBusiness: null,
            isLoading: false
        }
    }
    //API Calls
    async UNSAFE_componentWillMount(){
        this.setState({
            isLoading: true
        });
        try{
            let fetchItems = await APIConf.get('/business/typetravel/'.concat(this.props.typeOfBusiness).concat('/').concat(this.props.travelID));
            this.setState({
                Items: fetchItems.data.data,
                isLoading: false,
            });
        }catch(error){
            this.setState({
                travelItem: null,
                isLoading: false
            });
        }
    }
    //Functions

    //Render
    render() {
        const { image, Items, isLoading } = this.state;
        //JSX Code
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
                <NegociosGrid items={Items} isLoading={isLoading}/>
                <br />
                <section id="sec5">
                    <Footer />
                </section>
            </div>
        )
    }
}
