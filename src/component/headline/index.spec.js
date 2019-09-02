import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from '../../../Utils'

const setUp =( props={} ) => {
  const component = shallow(<Headline {...props} />)
  return component;
}

describe('Headline Component', () => {
  let wrapper;

  describe('Have props', () => {

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
      console.log('wrapper ', wrapper)
      const component = findByTestAttr(wrapper, 'HeadlineComponent');

      expect(component.length).toBe(0);

    })



  })
})
