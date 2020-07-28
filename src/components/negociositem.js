import React from 'react';
import { Button } from 'react-bootstrap';

const NegociosItem = ({ obj, id }) => {
    let _timer = obj.typeOfBusiness === "Hospedaje" ? (<li><strong>Entrada-Salida:</strong>&nbsp;{obj.checkinout}</li>) : (<li><strong>Servicio:</strong>&nbsp;{obj.openclose}</li>);
    return(
        <div className="cardd">
            <div className="cardd-inner">
                <div className="cardd-front">
                    <img src={obj.image} alt=""/>
                </div>
                <div className="cardd-back">
                    <h1>
                        {obj.name}&nbsp;&nbsp;<Button name={obj.typeOfBusiness} id={id} onClick={(e) => sessionStorage.setItem(e.target.name, e.target.id)} size="sm" variant="outline-info">Seleccionar</Button>
                    </h1>
                    <ul>
                        <li><strong>Direcci&oacute;n:</strong>&nbsp;{obj.address}</li>
                        <li><strong>Correo:</strong>&nbsp;{obj.email}</li>
                        <li><strong>Informaci&oacute;n:</strong>&nbsp;{obj.description}</li>
                        <li><strong>Tel&eacute;fono:</strong>&nbsp;{obj.phone}</li>
                        {_timer}
                        <li><strong>Precio:</strong>&nbsp;{obj.pricelevel}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NegociosItem;
