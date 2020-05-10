import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class ParkingSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false,
      desc: props.spot.desc,
    };
  }

  handleChange = (e) => {
    this.setState({
      isDirty: true,
      desc: e.target.value,
    });
  }

  update = (e) => {
    e.preventDefault();
  }

  render() {
    const { isDirty } = this.state
    const { spot } = this.props;

    return (
      <Card>
        <Card.Header>
          {spot.number}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" onChange={this.handleChange}></Form.Control>
            <br />
            <Button onClick={this.update} disabled={!isDirty}>Update</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default ParkingSpot;