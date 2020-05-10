import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { addLocation, requestAuthToken } from '../../util/locationsAjax';
import Alert from 'react-bootstrap/Alert';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      desc: props.desc || '',
      errors: [],
      success: '',
    };
  }

  componentDidMount() {
    requestAuthToken(({ authenticity_token }) => {
      this.setState({ authenticity_token });
    });
  }

  submit = (e) => {
    e.preventDefault();

    this.setState({ success: '' });

    const { name, desc, authenticity_token} = this.state;
    const err = [name, desc, authenticity_token].filter(item => item && item.trim.length !== 0).length !== 0;

    if (err) {
      this.setState({
        errors: [ 'There was an error adding the location. please make sure all fields are filled out' ]
      });
      return;
    }

    const data = { name, desc, authenticity_token };

    addLocation(data, (err = null) => {
      if (!err) {
        this.setState({
          name: '',
          desc: '',
          errors: [],
          success: 'The parking was created successfully!',
        });
      } else {
        this.setState({ errors: [err] });
      }
    });
  }

  handleChange = (e, field) => {
    this.setState({
      errors: [],
      success: '',
      [field]: e.target.value,
    });
  }

  render() {
    const { errors, desc, name, success } = this.state;
    return (
      <React.Fragment>
        {errors.length !== 0 &&
          <Row>
            <Col lg={{ span: 6, offset: 3 }} md={12}>
              <Alert variant="warning">
                {errors.map((err) => {
                  return (
                    <span key={uuidv1()}>
                      {err} <br />
                    </span>
                  );
                })}
              </Alert>
            </Col>
          </Row>
        }
        {success.length !== 0 &&
          <Row>
            <Col lg={{ span: 6, offset: 3 }} md={12}>
              <Alert variant="success">{success}</Alert>
            </Col>
          </Row>
        }
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={12}>
            <Form>
              <Form.Group>
                <Form.Label>Location Name:</Form.Label>
                <input type="text"
                       className="form-control"
                       placeholder="Location Name"
                       value={name}
                       onChange={(e) => { this.handleChange(e, 'name'); }} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location Description:</Form.Label>
                <Form.Control as="textarea"
                              rows="4"
                              value={desc}
                              onChange={(e) => { this.handleChange(e, 'desc'); }} />
              </Form.Group>
              <Button onClick={this.submit}>Add</Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Add;