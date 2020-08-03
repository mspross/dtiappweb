import React, { Component } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// CSS style sheet
import '../pages/css/style.css';
//Class
export default class footer extends Component {
    constructor(){
        super();
        this.state = {
            twitter: "https://twitter.com/@TurismoDinamico",
            facebook: "https://m.facebook.com/Destinos-Tur%C3%ADsticos-Inteligentes-M%C3%A9xico-101666401634015",
            youtube: "https://youtube.com",
        }
    }
    render() {
        const { twitter, facebook, youtube } = this.state;
        return (
            <div>
                <span className="footer">
                    Copyright &copy; 2020 CDHT Todos los derechos reservados.
                </span>
                <span className="footer">
                    S&iacute;ganos en nuestras redes sociales&nbsp;<a href={facebook}><FaFacebook className="redes-sociales"/></a>&nbsp;<a href={twitter}><FaTwitter className="redes-sociales"/></a>&nbsp;<a href={youtube}><FaYoutube /></a>
                </span>
            </div>
        )    
    }
}
