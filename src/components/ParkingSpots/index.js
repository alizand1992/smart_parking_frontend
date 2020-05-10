import React from 'react';
import { getParkingSpots, syncParkingSpots } from '../../util/parkingSpotsAjax';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ParkingSpots extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getParkingSpots((res) => {
      console.log(res);
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
    return (
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={12}>
          <Button variant="primary"
                  onClick={this.sync}>
            Sync
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ParkingSpots;