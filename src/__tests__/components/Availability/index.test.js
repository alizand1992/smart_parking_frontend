import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Availability from '../../../components/Availability';

Enzyme.configure({ adapter: new Adapter() });

describe('Locations', () => {
  const wrapper = shallow(<Availability match={
    {
      params: {
       id: 1,
      }
    }
  } />);

  it('shows as many locations as there are ', () => {
    expect(wrapper.html()).toContain('Availability');
  });
});