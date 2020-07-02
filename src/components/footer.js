import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class footer extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={{ span:6, offset:4 }}>
                            <span style={{fontFamily:'Arial', fontSize:'.9em', color:'grey'}}>
                                Copyright &copy; 2020 CDHT Todos los derechos reservados.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        )    
    }
}
