import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import APIConf from '../components/apiconfig';
import Footer from '../components/footer';
import Spinner from '../components/spinner';
import DisplayErr from '../components/error';
import Dti from '../images/Dti_icontext.png';
//Style sheet
import './css/grid.css';
//Render
export default class Orden extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isError: false,
            routelink: '/dti/detalles',
            routehome: '/',
            ItemsRutas: null,
            ItemsDestino: null,
            ItemsHospedaje: null,
            ItemsGastro: null,
            ItemsCultura: null,
            ItemsFerias: null,
            ItemsArtesanias: null,
            rutas: sessionStorage.getItem("Ruta"),
            destinos: sessionStorage.getItem("Destino"),
            hospedaje: sessionStorage.getItem("Hospedaje") || 'empty',
            gastronomia: sessionStorage.getItem("Gastronomia") || 'empty',
            culturarecreacion: sessionStorage.getItem("Cultura-Recreacion") || 'empty',
            feriaseventos: sessionStorage.getItem("Ferias-Eventos") || 'empty',
            artesanias: sessionStorage.getItem("Artesanias") || 'empty'
        }
    }
    //Functions
    async UNSAFE_componentWillMount(){
        try{
            let fetchRutas = await APIConf.get('/routes/ID/'.concat(this.state.rutas));
            let fetchDestino = await APIConf.get('/destiny/ID/'.concat(this.state.destinos));
            this.setState({
                ItemsRutas: fetchRutas.data.data[0],
                ItemsDestino: fetchDestino.data.data[0]
            });
            if(this.state.hospedaje !== 'empty'){
                let fetchHospedaje = await APIConf.get('/business/ID/'.concat(this.state.hospedaje));
                this.setState({ ItemsHospedaje: fetchHospedaje.data.data[0] });
            }
            if(this.state.gastronomia !== 'empty'){
                let fetchGastronomia = await APIConf.get('/business/ID/'.concat(this.state.gastronomia));
                this.setState({ ItemsGastro: fetchGastronomia.data.data[0] });
            }
            if(this.state.culturarecreacion !== 'empty'){
                let fetchCultura = await APIConf.get('/business/ID/'.concat(this.state.culturarecreacion));
                this.setState({ ItemsCultura: fetchCultura.data.data[0]});
            }
            if(this.state.feriaseventos !== 'empty'){
                let fetchFerias = await APIConf.get('/business/ID/'.concat(this.state.feriaseventos));
                this.setState({ ItemsFerias: fetchFerias.data.data[0] });
            }
            if(this.state.artesanias !== 'empty'){
                let fetchHArtesanias = await APIConf.get('/business/ID/'.concat(this.state.artesanias));
                this.setState({ ItemsArtesanias: fetchHArtesanias.data.data[0] });
            }
            this.setState({
                isLoading: false
            });
        }catch(error){
            this.setState({
                isLoading: false,
                isError: true,
                msgStatus: "204",
                msgText: "¡¡ Uuupsss !! Algo salio mal. No hay informacion disponible"
            });
        }
    }
    handleCloseOrder = e => {
        e.preventDefault();
        window.location = this.state.routelink;
    }
    handleReservar = e => {
        e.preventDefault();
        alert("Destino Turistico Reservado!!");
        window.location = this.state.routehome;
    }
    handleCloseAlert = () => {
        this.setState({
            isError: false,
            isLoading:false
        });
        window.location = this.state.routehome;
    }
    //Render
    render(){
        const {isLoading, isError, msgText, msgStatus, ItemsRutas, ItemsDestino, ItemsHospedaje, ItemsGastro, ItemsCultura, ItemsFerias, ItemsArtesanias } = this.state;
        if(isLoading){
            return(
                <Spinner />
            )
        }else if(isError){
            return(
                <DisplayErr status={msgStatus} message={msgText} handleCloseAlert={this.handleCloseAlert} />
            )
        }else{
            const images = require.context('../images', true);
            let imageRuta = images(`./${ItemsRutas.image}`);
            let imageDestino = images(`./${ItemsDestino.image}`);
            let _hospedaje = (
                ItemsHospedaje ? <div className="item"><img alt="DTI" src={`${ItemsHospedaje.image}`} /><p><strong>{ItemsHospedaje.name}</strong></p></div> : ''
            );
            let _gastro = (
                ItemsGastro ? <div className="item"><img alt="DTI" src={`${ItemsGastro.image}`} /><p><strong>{ItemsGastro.name}</strong></p></div> : ''
            );
            let _cultura = (
                ItemsCultura ? <div className="item"><img alt="DTI" src={`${ItemsCultura.image}`} /><p><strong>{ItemsCultura.name}</strong></p></div> : ''
            );
            let _ferias = (
                ItemsFerias ? <div className="item"><img alt="DTI" src={`${ItemsFerias.image}`} /><p><strong>{ItemsFerias.name}</strong></p></div> : ''
            );
            let _artesanias = (
                ItemsArtesanias ? <div className="item"><img alt="DTI" src={`${ItemsArtesanias.image}`} /><p><strong>{ItemsArtesanias.name}</strong></p></div> : ''
            );
            return(
                <div>
                    <div className="grid-container centro">
                        <div className="item">
                            <img alt="DTI" src={`${Dti}`} />
                            <p><strong>Destinos Tur&iacute;sticos Inteligentes</strong></p>
                        </div>
                        <div className="item">
                            <img alt="DTI" src={`${imageRuta}`} />
                            <p><strong>{ItemsRutas.routename}</strong></p>
                        </div>
                        <div className="item">
                            <img alt="DTI" src={`${imageDestino}`} />
                            <p><strong>{ItemsDestino.dti_name}</strong></p>
                        </div>
                        {_hospedaje}
                        {_gastro}
                        {_cultura}
                        {_ferias}
                        {_artesanias}
                    </div>
                    <br/>
                    <div className="centro">
                        <Button variant="outline-secondary" className="buttonFormGrid sombra btnText" size="sm" onClick={this.handleCloseOrder}>Cancelar</Button>&nbsp;&nbsp;
                        <Button variant="outline-primary" className="buttonFormGrid sombra btnText" size="sm" onClick={this.handleReservar}>Reservar Destino Tur&iacute;stico</Button>
                    </div>
                    <br/><br/>
                    <Footer />
                </div>
            )
        }
    }
}