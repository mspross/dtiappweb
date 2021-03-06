import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

export default class errorgenerico extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center" style={{margin: 'auto', borderRadius: '35px', paddingTop:'20px'}}>
                <Alert variant="danger" style={{boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19)', fontSize:'1.3em'}}>
                    <Alert.Heading>({this.props.status})</Alert.Heading>
                    <p>{this.props.message}</p>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <Button onClick={this.props.handleCloseAlert} variant="outline-danger" style={{boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19)', fontSize:'1.3em'}}>
                            Cerrar
                        </Button>
                    </div>                        
                </Alert>
            </div>
        )    
    }
}