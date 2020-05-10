import React from 'react';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ id });
  }

  render() {
    const { id } = this.state;

    if (id === -1) {
      return <div>Loading</div>;
    } else {
      return <div>Availability</div>;
    }
  }
}

export default Availability;