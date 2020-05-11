import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Badge from 'react-bootstrap/Badge';

import Status from '../../../components/ParkingSpots/ParkingSpot/Status';

Enzyme.configure({ adapter: new Adapter() });

describe('Parking Status', () => {
  describe('available is true', () => {
    const wrapper = shallow(<Status available={true} />);

    it('returns Available badge', () => {
      expect(wrapper.find(Badge).html()).toContain('Available');
    });
  });

  describe('available is undefined', () => {
    const wrapper = shallow(<Status />);

    it('returns Unknown badge', () => {
      expect(wrapper.find(Badge).html()).toContain('Unknown');
    });
  });

  describe('available is false', () => {
    const wrapper = shallow(<Status available={false} />);

    it('returns Unknown badge', () => {
      expect(wrapper.find(Badge).html()).toContain('Unavailable');
    });
  });
});