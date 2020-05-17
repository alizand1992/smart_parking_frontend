import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { v1 as uuidv1 } from 'uuid';

import { default as ParkingAvailability } from '../ParkingSpots/ParkingSpot/Availability';
import { getParkingSpots } from '../../util/parkingSpotsAjax';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      errors: [],
      loading: true,
      checkStatusRetries: 5,
      ws: undefined
    };
  }

  componentDidMount() {
    this.establishWebSocketConnection();

    if (this.state.ws) {
      this.checkStatus();
    }

    const { id } = this.props.match.params;

    getParkingSpots(id, (res) => {
      this.setState({
        id,
        parkingSpots: res,
      });
    });
  }

  establishWebSocketConnection = () => {
    let { ws } = this.state;
    if (!ws) {
      ws = new WebSocket('wss://asrxll77p6.execute-api.us-west-1.amazonaws.com/parkingSpotsAPI');
    }

    ws.onerror = (event) => {
      console.log('error', event);
    };

    ws.onmessage = (data) => {
      data = JSON.parse(data.data);
      console.log(data);

      if (data.message !== 'Internal server error') {
        const { parkingSpots } = this.state;
        const parkingSpotsWithAvailability = [];

        if (parkingSpots) {
          const availabilities = Object.values(data)[0];

          console.log('got triggered');
          parkingSpots.forEach((ps) => {
            availabilities.forEach((availability) => {
              if (availability.id === ps.aws_id) {
                ps = {
                  ...ps,
                  availability: availability.availability,
                };
              }
            });

            parkingSpotsWithAvailability.push(ps);
          });

          this.setState({
            loading: false,
            parkingSpots: parkingSpotsWithAvailability,
          });
        }
      } else {
        this.checkStatus();
      }
    };

    ws.onopen = () => {
      this.setState({ ws });
      this.checkStatus();
    };
  }

  checkStatus = (retries = 5) => {
    const { loading, ws } = this.state;
    if (ws && retries !== 0 && loading) {
      ws.send('{ "action": "getParkingSpots" }');
      setTimeout(
        () => {
          this.checkStatus(retries - 1);
        }, 2000
      );
    } else if (retries === 0 && loading) {
      this.setState({
        errors: ['There was an error connecting to the server.'],
      });
    }
  }

  render() {
    const { errors, id, loading, parkingSpots } = this.state;

    if (errors.length !== 0) {
      return (
        <Row>
          <Col lg={12} className="text-center">
            <Alert variant="danger">
              {errors.map((err, index) => {
                return (
                  <React.Fragment key={index}>
                    {err} <br/>
                  </React.Fragment>
                );
              })}
            </Alert>
          </Col>
        </Row>
      );
    }

    if (id === -1 || loading) {
      return (
        <Row>
          <Col lg={12} className="text-center">
            <Spinner animation="border" size="lg" /><br />
            Connecting...
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        {parkingSpots.map(spot => {
          const { number, availability } = spot;

          return (
            <Col lg={3} style={{ marginBottom: '20px' }} key={uuidv1()}>
              <ParkingAvailability number={number} availability={availability} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Availability;