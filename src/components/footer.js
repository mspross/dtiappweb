import React, { Component } from 'react';
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
// CSS style sheet
import '../pages/css/style.css';
//Class
export default class footer extends Component {
    handleTwitter = () => {
        window.location = "https://twitter.com/@TurismoDinamico";
    }
    handleFacebook = () => {
        window.location = "https://m.facebook.com/Destinos-Tur%C3%ADsticos-Inteligentes-M%C3%A9xico-101666401634015";
    }
    render() {
        return (
            <div>
                <span className="footer">
                    Copyright &copy; 2020 CDHT Todos los derechos reservados.
                </span>
                <span className="footer">
                    S&iacute;ganos en nuestras redes sociales&nbsp;<FaFacebookSquare className="redes-sociales" onClick={this.handleFacebook} />&nbsp;<FaTwitterSquare className="redes-sociales" onClick={this.handleTwitter}/>
                </span>
            </div>
        )    
    }
}
