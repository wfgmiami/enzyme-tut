import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps } from '../../../Utils'

const setUp =( props={} ) => {
  const component = shallow(<Headline {...props} />)
  return component;
}

describe('Headline Component', () => {

  describe('checking propType', () => {
    it('it should not throw a warning', () => {

      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 22,
          onlineStatus: false
        }]
      }
      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();

    })
  })


  describe('Have props', () => {
    let wrapper;
    beforeEach( () => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      }

      wrapper = setUp(props)
    })

    it("Shoud render without errors", () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')

      expect(component.length).toBe(1);


    })

    it("should render a H1", () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it("should render desc", () => {
      const desc = findByTestAttr(wrapper, 'desc')

      expect(desc.length).toBe(1);

    })

  })

  describe('Have NO props', () => {

    let wrapper;
    beforeEach( () => {
      wrapper = setUp();
    })

    it('Should not render', () => {

      const component = findByTestAttr(wrapper, 'HeadlineComponent');

      expect(component.length).toBe(0);

    })

  })
})


