import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Status = ({ available }) => {
  if (available === true) {
    return <Badge variant="success">Available</Badge>;
  } else if (available === undefined) {
    return <Badge variant="warning">Unknown</Badge>;
  } else {
    return <Badge variant="danger">Unavailable</Badge>;
  }
};

export default Status;