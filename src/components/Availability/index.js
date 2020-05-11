import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { v1 as uuidv1 } from 'uuid';

import { default as ParkingAvailability } from '../ParkingSpots/ParkingSpot/Availability';
import { getParkingSpots } from '../../util/parkingSpotsAjax';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    getParkingSpots((res) => {
      this.setState({
        id,
        parkingSpots: res,
      });
    });
  }

  render() {
    const { id, parkingSpots } = this.state;

    if (id === -1) {
      return <div>Loading</div>;
    }

    return (
      <Row>
        {parkingSpots.map(spot => {
          const { number, availability } = spot;

          return (
            <Col lg={3} style={{ marginBottom: '20px' }} key={uuidv1()}>
              <ParkingAvailability number={number} availability={availability} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Availability;