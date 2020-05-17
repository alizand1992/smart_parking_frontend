import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import { getAllSpots, syncParkingSpots } from '../../util/parkingSpotsAjax';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ParkingSpot from './ParkingSpot';
import { requestAuthToken } from '../../util/locationsAjax';
import Spinner from 'react-bootstrap/Spinner';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      syncing: false,
      parkingSpots: [],
    };
  }

  componentDidMount() {
    getAllSpots((parkingSpots) => {
      this.setState({ parkingSpots });
    });
  }

  sync = () => {
    this.setState({ syncing: true })
    if (this.state.ws) {
      this.checkStatus();
    } else {
      this.establishWebSocketConnection();
    }
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

      if (data.message !== 'Internal server error') {
        const parkingSpots = Object.values(data)[0];
        requestAuthToken((token) => {
          const spots = {
            ...token,
            parkingSpots,
          };

          syncParkingSpots(spots, (res) => {
            if (res) {
              getAllSpots((parkingSpots) => {
                this.setState({ parkingSpots, syncing: false });
              });
            }
          });
        });
      }
    };

    ws.onopen = () => {
      this.setState({ ws });
      this.checkStatus();
    };
  }

  checkStatus = (retries = 5) => {
    const { ws } = this.state;
    if (ws && retries !== 0) {
      ws.send('{ "action": "getParkingSpots" }');
      setTimeout(
        () => {
          this.checkStatus(retries - 1);
        }, 2000
      );
    }
  }


  render() {
    const { syncing, parkingSpots } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={12}>
            <Button variant="primary"
                    onClick={this.sync}>
              {syncing && <Spinner animation={'border'} size={'sm'}/>} {' '}
              Sync
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          {parkingSpots.map((spot) => {
            return (
              <Col lg={3} key={uuidv1()} style={{ marginBottom: '20px' }}>
                <ParkingSpot spot={spot}/>
              </Col>
            );
          })}
        </Row>
      </React.Fragment>
    );
  }
}

export default ParkingSpots;