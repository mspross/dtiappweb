//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// CSS style sheet
import '../pages/css/style.css';
// Images
import Registro from '../images/Bot_ini_azul.png';
//Object
export default class subcover extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 4 }}>
                        <img alt="registro" onClick={this.props.handleCloseSession} className="imgsubcover" src={`${Registro}`}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
