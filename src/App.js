import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/home';
import RoutesT from './pages/rutas';
import Contacto from './pages/contacto';
//Function
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dti/rutas" component={RoutesT} />
        <Route path="/dti/contacto" component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
