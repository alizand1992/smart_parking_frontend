import React from 'react';
import Card from 'react-bootstrap/Card';
import Status from './Status';

class Availability extends React.Component {
  render() {
    const { availability, number } = this.props;

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
            Availability: <Status available={availability} />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Availability;