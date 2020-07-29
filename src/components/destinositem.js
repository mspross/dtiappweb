import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class DestinosItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            obj: this.props.obj,
            id: this.props.id,
            nextImage: '/dti/detalles'
        }
    }
    handleSelectedItem = e => {
        e.preventDefault();
        sessionStorage.setItem(e.target.name, e.target.id);
        window.location = this.state.nextImage
    }
    render(){
        const { obj, id } = this.state;
        const images = require.context('../images', true);
        let image = images(`./${obj.image}`);
        return(
            <div className="cardd">
                <div className="cardd-inner">
                    <div className="cardd-front">
                        <img src={image} alt={obj.dti_name}/>
                    </div>
                    <div className="cardd-back">
                        <h1>
                            {obj.dti_name}&nbsp;&nbsp;<Button name="Destino" id={id} onClick={this.handleSelectedItem} size="sm" variant="outline-primary">Seleccionar</Button>
                        </h1>
                        <ul>
                            <li><strong>{obj.description}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 
