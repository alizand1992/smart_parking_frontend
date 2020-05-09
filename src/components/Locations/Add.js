import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      desc: props.desc,
    };
  }

  submit = (e) => {
    e.preventDefault();
  }

  render() {
    const { desc, name } = this.state;
    return (
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={12}>
          <Form>
            <Form.Group>
              <Form.Label>Location Name:</Form.Label>
              <Form.Control type="text"
                            placeholder="Location Name"
                            value={name}
                            onChange={(e) => {this.setState({ name: e.target.value })}} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location Description:</Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Button onClick={this.submit}>Add</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Add;