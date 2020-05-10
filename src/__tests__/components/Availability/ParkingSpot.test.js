import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Card from 'react-bootstrap/Card';

import Availability from '../../../components/ParkingSpots/ParkingSpot/Availability';

Enzyme.configure({ adapter: new Adapter() });

describe('Parking Spot', () => {
  describe('no parking spots', () => {
    const wrapper = shallow(<Availability />);

    it('returns null', () => {
      expect(wrapper.instance().render()).toBe(null);
    });
  });

  describe('has parking spots', () => {
    const wrapper = shallow(<Availability number={1} />);

    it('renders the card', () => {
      expect(wrapper.find(Card)).toHaveLength(1);
    });
  });
});