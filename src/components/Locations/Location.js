import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Location extends React.Component {
  render() {
    const { desc, id, name } = this.props;

    if (!id || !name) {
      return null;
    }

    const link = `/availability/${id}`;
    const editLink = `/locations/${id}/edit`;
    return (
      <Card>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {desc}
          </Card.Text>
          <Link to={link}>
            <Button variant="primary">
              Go to location
            </Button>
          </Link>
          {' '}
          <Link to={editLink}>
            <Button variant="success">
              Edit
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Location;