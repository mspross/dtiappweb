import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/home';
import Rutas from './pages/rutas';
import Destinos from './pages/destinos';
import Contacto from './pages/contacto';
import Registro from './pages/registro';
import NewNegocio from './pages/negociosform';
import Detalles from './pages/detalles';
import Preorden from './pages/preorden';
import Orden from './pages/orden';
//Function
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={props => <Home {...props}/>} />
        <Route path="/dti/rutas" component={props => <Rutas {...props}/>} />
        <Route path="/dti/destinos" component={props => <Destinos {...props} />} />
        <Route path="/dti/contacto" component={props => <Contacto {...props}/>} />
        <Route path="/dti/registro" component={props => <Registro {...props}/>} />
        <Route path="/dti/detalles" component={props => <Detalles {...props}/>} />
        <Route path="/dti/preorden" component={props => <Preorden {...props}/>} />
        <Route path="/dti/negocios/nuevo" component={props => <NewNegocio {...props}/>} /> 
        <Route path="/dti/orden" component={props => <Orden {...props}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
