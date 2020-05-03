import React from 'react';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Location from '../../../components/Locations/Location';

Enzyme.configure({ adapter: new Adapter() });

describe('Locations', () => {
  const history = createMemoryHistory();

  describe('has location', () => {
    const wrapper = shallow(
      <Router history={history}>
        <Location id={1} name="location name" desc="location description" />);
      </Router>
    );

    it('shows location name', () => {
      expect(wrapper.html()).toContain('location name');
    });

    it('shows location description', () => {
      expect(wrapper.html()).toContain('location description');
    });
  });

  describe('has location', () => {
    const wrapper = shallow(<Location id={1} name={''}/>);

    it('does not render', () => {
      expect(wrapper.instance().render()).toBe(null);
    });
  });
});