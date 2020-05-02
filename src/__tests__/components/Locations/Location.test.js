import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Location from '../../../components/Locations/Location';

Enzyme.configure({ adapter: new Adapter() });

describe('Locations', () => {
  describe('has location', () => {
    const wrapper = shallow(<Location name="location name" desc="location description" />);

    it('shows location name', () => {
      expect(wrapper.html()).toContain('location name');
    });

    it('shows location description', () => {
      expect(wrapper.html()).toContain('location description');
    });
  });

  describe('has location', () => {
    const wrapper = shallow(<Location />);

    it('does not render', () => {
      expect(wrapper.instance().render()).toBe(null);
    });
  });
});