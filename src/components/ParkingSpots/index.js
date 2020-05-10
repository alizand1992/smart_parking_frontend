import React from 'react';

import { v1 as uuidv1 } from 'uuid';

import { getParkingSpots, syncParkingSpots } from '../../util/parkingSpotsAjax';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ParkingSpot from './ParkingSpot';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingSpots: [],
    };
  }

  componentDidMount() {
    getParkingSpots((parkingSpots) => {
      this.setState({ parkingSpots });
    });
  }

  sync = () => {
    syncParkingSpots((res) => {
      if (res) {
        getParkingSpots((res) => {
          console.log(res);
        });
      }
    });
  }

  render() {
    const { parkingSpots } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={12}>
            <Button variant="primary"
                    onClick={this.sync}>
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