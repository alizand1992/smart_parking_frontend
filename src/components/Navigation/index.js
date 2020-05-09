import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">
          Smart Parking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mr-auto">
            <NavDropdown id="location-dropdown" title="Locations">
              <NavDropdown.Item href="/locations">All Locations</NavDropdown.Item>
              <NavDropdown.Item href="/locations/add">Add Locations</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;