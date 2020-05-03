import React from 'react';
import Card from 'react-bootstrap/Card';
import Status from './Status';
import PropTypes from 'prop-types';

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

ParkingSpot.propTypes = {
  available: PropTypes.string.isRequired,
  number: PropTypes.string,
};

export default ParkingSpot;