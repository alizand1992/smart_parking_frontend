import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Location from './Location';
import { getLocations } from '../../util/locationsAjax';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };
  }

  componentDidMount() {

    getLocations(locations => this.setState({ locations }));
  }

  render() {
    const { locations } = this.state;

    return (
      <Row>
        {locations.length === 0 &&
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant="warning">There are no locations available</Alert>
          </Col>
        }
        {locations.map((location) => {
          return (
            <Col md={3} key={uuidv1()}>
              <Location id={location.id} name={location.name} desc={location.desc} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Locations;