import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {

  describe('Checking PropTypes', () => {
    const expectedProps = {
      title: 'Example Title',
      desc: 'Some text'
    }

    it('should NOT throw a warning', () => {
      const errProps = checkProps(ListItem, expectedProps);
      expect(errProps).toBeUndefined();
    })

  })

  describe('Component render', () => {

    let wrapper;
    beforeEach( () => {
      const props = {
        title: 'title',
        desc: 'desc'
      }
      wrapper = shallow(<ListItem {...props}/>)
    })

    it('should render without error', () => {
      const component = findByTestAttr(wrapper,'listItemComponent')
      expect(component.length).toBe(1)

    })

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle')
      expect(title.length).toBe(1);
    })

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentTitle');
      expect(desc.length).toBe(1)
    })

  })

  describe('Should NOT render', () => {
    let wrapper;

     beforeEach( () => {
       const props = {
         title: '',
         desc: ''
       }
       wrapper = shallow(<ListItem {...props}/>)
     })

     it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent')

      expect(component.length).toBe(0);
     })

  })


})
