import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Locations from './components/Locations';

function App() {
  return (
    <Router>
      <Link to="/locations">Locations</Link>
      <Container>
        <Switch>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
