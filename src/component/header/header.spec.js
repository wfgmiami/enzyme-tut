import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../Utils/index';

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Header component', () => {
  let component;
  beforeEach( () => {
    component = setUp();
  })

  it('it should render without errors', () => {
    // const component = shallow(<Header/>)
    // const component = setUp();

    // const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);

  })

  it('Should render a logo', () => {

    const wrapper = findByTestAttr(component, 'logoIMG')
    expect(wrapper.length).toBe(1);
  })
})


