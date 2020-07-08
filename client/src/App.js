import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './themes/GlobalStyles';
import Welcome from './pages/Welcome';
import Wohnzimmer from './pages/Wohnzimmer';
import Schreibtisch from './pages/Schreibtisch';
import Laptop from './pages/Laptop';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/home">
            <Welcome />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/wohnzimmer">
            <Wohnzimmer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/wohnzimmer/schreibtisch">
            <Schreibtisch />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/wohnzimmer/schreibtisch/laptop">
            <Laptop />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
