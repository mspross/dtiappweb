//Headers Components
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// CSS style sheet
import '../pages/css/style.css';
//Object
export default class subcover extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col md={{ span: 9, offset: 3 }}>
                        <Image src={`${this.props.image}`} fluid rounded onClick={this.props.handleCloseSession} style={{cursor:'pointer', width:'65vh', height:'40vh'}} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
