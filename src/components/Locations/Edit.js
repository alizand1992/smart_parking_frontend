import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  unlinkSpotFromLocation,
  linkSpotToLocation,
  getParkingSpotsForLocation,
} from '../../util/parkingSpotsAjax';


class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      parkingSpots: [],
      locationSpots: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ id });

    getParkingSpotsForLocation(id, (res) => {
      const parkingSpots = res.data;
      const locationSpots = [];
      parkingSpots.forEach((spot) => {
        const { id: spot_id } = spot;
        const location_id = spot.location_id !== null ? spot.location_id.toString() : '0';

        if (!locationSpots.includes(spot_id) && location_id !== id) {
          locationSpots.push(spot_id);
        }
      });

      this.setState({ parkingSpots, locationSpots });
    });
  }

  remove = (e, spot_id) => {
    e.preventDefault();

    const { id: location_id, locationSpots } = this.state;

    if (location_id === -1) {
      return;
    }

    unlinkSpotFromLocation(location_id, spot_id,(res) => {
      locationSpots.push(spot_id);
      this.setState({ locationSpots });
    });
  }

  add = (e, spot_id) => {
    e.preventDefault();

    const { id: location_id } = this.state;

    if (location_id === -1) {
      return;
    }

    linkSpotToLocation(location_id, spot_id, (res) => {
      const locationSpots = this.state.locationSpots.filter(item => item !== spot_id);
      this.setState({ locationSpots });
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
            const { number, desc, id } = spot;
            return (
              <Col lg={3} key={uuidv1()}>
                <Card>
                  <Card.Header>
                    {number}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {desc}
                    </Card.Text>
                    {locationSpots.includes(id)
                      ? (<Button variant="success" onClick={(e) => this.add(e, id)}>+ Link</Button>)
                      : (<Button variant="danger" onClick={(e) => this.remove(e, id)}>- Unlink</Button>)
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