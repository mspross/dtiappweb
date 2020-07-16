import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Definition
export default class notificacion extends Component{
    constructor(props){
        super(props);
        toast.configure();
    }
    render(){
        let _options = this.props.options;
        let _message = this.props.message;
        switch(_options){
            case 1: 
                return (
                    toast.error(_message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                    })
                );
            case 2:
                return (
                    toast.success(_message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                    })
                );
            default:
                return (
                    toast.info(_message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                    })
                );
        }
    }
}