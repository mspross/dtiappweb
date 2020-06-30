import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dti/home" component={Home} />
        <Route path="/dti" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
