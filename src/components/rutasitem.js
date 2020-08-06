import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class RutasItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            obj: this.props.obj,
            id: this.props.id,
            nextImage: '/dti/destinos'
        }
    }
    render(){
        const { obj, id } = this.state;
        const images = require.context('../images', true);
        let image = images(`./${obj.image}`);
        return(
            <div className="rutas-cardd">
                <div className="rutas-cardd-front">
                    <Image id={id} src={image} name={obj.routename} alt={obj.description} onClick={this.props.handleDestinos}/>
                </div>
            </div>
        )
    }
} 
