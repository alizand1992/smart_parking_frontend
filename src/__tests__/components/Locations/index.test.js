import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Locations from '../../../components/Locations';
import Location from '../../../components/Locations/Location';

Enzyme.configure({ adapter: new Adapter() });

describe('Locations', () => {
  const wrapper = shallow(<Locations />);

  describe('has locations', () => {
    it('shows as many locations as there are ', () => {
      expect(wrapper.find(Location)).toHaveLength(4);
    });
  });
});