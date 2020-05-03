import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Locations from './components/Locations';
import Availability from './components/Availability';

function App() {
  return (
    <Router>
      <Link to="/locations">Locations</Link>
      <Container>
        <Switch>
          <Route path="/locations" component={Locations} />
          <Route path="/availability/:id" component={Availability} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
