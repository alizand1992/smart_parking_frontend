import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Locations from './components/Locations';
import { default as AddLocation } from './components/Locations/Add';
import Availability from './components/Availability';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <br />
      <Container>
        <Switch>
          <Route path="/locations/add" component={AddLocation} />
          <Route path="/locations" component={Locations} />
          <Route path="/availability/:id" component={Availability} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
