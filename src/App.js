import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
