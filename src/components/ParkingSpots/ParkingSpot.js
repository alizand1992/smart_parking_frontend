import React from 'react';
import Card from 'react-bootstrap/Card';
import Status from '../Availability/Status';

class ParkingSpot extends React.Component {
  render() {
    const { available, number } = this.props;

    if (!number) {
      return null;
    }

    return (
      <Card>
        <Card.Header>
          Spot {number}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Availability: <Status available={available} />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ParkingSpot;