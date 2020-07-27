import React from 'react';

const NegociosItem = ({ obj, id }) => {
    let _timer = obj.typeOfBusiness === "Hospedaje" ? (<li><strong>Entrada-Salida:</strong>&nbsp;{obj.checkinout}</li>) : (<li><strong>Servicio:</strong>&nbsp;{obj.openclose}</li>);
    return(
        <div className="cardd" onClick={(e) => console.log(e.target.id)}>
            <div className="cardd-inner">
                <div className="cardd-front">
                    <img src={obj.image} alt="" />
                </div>
                <div className="cardd-back">
                    <h1>{obj.name}</h1>
                    <ul id={id}>
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
