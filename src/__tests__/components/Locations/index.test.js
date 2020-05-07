import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';

import Alert from 'react-bootstrap/Alert';

import moxios from 'moxios';

import Locations from '../../../components/Locations';
import Location from '../../../components/Locations/Location';

Enzyme.configure({ adapter: new Adapter() });

describe('Locations', () => {
  describe('no locations', () => {
    beforeEach(() => {
      moxios.install();
      moxios.stubRequest('api/locations', {
        status: 200,
        response: {
          data: [],
        },
      });
    });

    afterEach(() => moxios.uninstall());
    const wrapper = shallow(<Locations />);

    it('shows alert', () => {
      moxios.wait(() => {
        expect(wrapper.find(Alert)).toHaveLength(1);
        done();
      });
    });

    it('does not show any locations', () => {
      moxios.wait(() => {
        expect(wrapper.find(Location)).toHaveLength(0);
        done();
      });
    });
  });

  describe('has locations', () => {
    beforeEach(() => {
      moxios.install();
      moxios.stubRequest('api/locations', {
        status: 200,
        response: {
          data: [
            {
              id: '1',
              name: 'Location Name 1',
              desc: 'location description 1',
            },
            {
              id: '2',
              name: 'Location Name 2',
              desc: 'location description 2',
            },
          ],
        },
      });
    });
    afterEach(() => moxios.uninstall());

    const wrapper = shallow(<Locations />);

    it('shows as many locations as there are ', () => {
      moxios.wait(() => {
        expect(wrapper.find(Location)).toHaveLength(2);
        done();
      });
    });
  });
});