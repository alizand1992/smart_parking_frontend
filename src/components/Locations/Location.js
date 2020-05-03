import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Location extends React.Component {
  render() {
    const { name, desc } = this.props;

    if (!name && !desc) {
      return null;
    }

    return (
      <Card>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button variant="primary">
            Go to location
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Location.propTypes = {
  name: PropTypes.string.required,
  desc: PropTypes.string.optional,
};

export default Location;