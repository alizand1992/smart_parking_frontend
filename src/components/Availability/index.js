import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { v1 as uuidv1 } from 'uuid';

import { default as ParkingAvailability } from '../ParkingSpots/ParkingSpot/Availability';
import { getParkingSpots } from '../../util/parkingSpotsAjax';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      ws: undefined,
    };
  }


  componentDidMount() {
    const { id } = this.props.match.params;
    let { ws } = this.state;

    if (!ws) {
      ws = new WebSocket('wss://asrxll77p6.execute-api.us-west-1.amazonaws.com/parkingSpotsAPI');

      ws.onerror = (event) => {
        console.log(ws.readyState);
        console.log('error', event);
      };

      ws.onmessage = (data) => {
        console.log(ws.readyState);
        console.log('message', data);
      };

      ws.onopen = () => {
        console.log('open', ws.readyState);
      };

      ws.onclose = (event) => {
        console.log(ws.readyState);
        console.log('close', event);
      };
    }

    getParkingSpots((res) => {
      this.setState({
        id,
        parkingSpots: res,
        ws
      });
    });
  }

  checkStatus = () => {
    console.log(this.state.ws.readyState);
    this.state.ws.send('{ "action": "getParkingSpots" }', {}, (data) => {
      console.log(data);
    });
  }

  render() {
    const { id, parkingSpots } = this.state;

    if (id === -1) {
      return <div>Loading</div>;
    }

    return (
      <Row>
        <button onClick={this.checkStatus}>Check Satus</button>
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