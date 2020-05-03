import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Location from './Location';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [
        {
          name: 'location name',
          desc: 'location information. Something nice about this place',
        },
        {
          name: 'location name 2',
          desc: 'location information. Something nice about this place 2',
        },
        {
          name: 'location name 2',
          desc: 'location information. Something nice about this place 2',
        },
        {
          name: 'location name 2',
          desc: 'location information. Something nice about this place 2',
        },
      ],
    };
  }

  render() {
    const { locations } = this.state;

    return (
      <Row>
        {locations.map((location) => {
          return (
            <Col md={3} key={uuidv1()}>
              <Location name={location.name} desc={location.desc} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Locations;