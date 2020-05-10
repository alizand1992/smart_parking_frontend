import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getParkingSpots } from '../../util/parkingSpotsAjax';
import { v1 as uuidv1 } from 'uuid';
import Alert from 'react-bootstrap/Alert';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingSpots: [
        {
          id: 1,
          name: 'A1',
          desc: 'Level one parking',
        },
        {
          id: 2,
          name: 'A2',
          desc: 'Level one parking',
        },
        {
          id: 3,
          name: 'B3',
          desc: 'Level two parking',
        },
      ],
      locationSpots: [
        1,
        2,
      ],
    };
  }

  componentDidMount() {
    getParkingSpots((res) => {
      console.log(res);
    });
  }

  render() {
    const { parkingSpots, locationSpots } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col lg={12}>
            <Alert variant="info">
              You can add to or remove spots from a location!
            </Alert>
          </Col>
        </Row>
        <Row>
          {parkingSpots.map((spot) => {
            return (
              <Col lg={3} key={uuidv1()}>
                <Card>
                  <Card.Header>
                    {spot.name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {spot.desc}
                    </Card.Text>
                    {locationSpots.includes(spot.id)
                      ? (<Button variant="danger">- Remove</Button>)
                      : (<Button variant="success">+ Add</Button>)
                    }
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </React.Fragment>
    );
  }
}

export default Edit;