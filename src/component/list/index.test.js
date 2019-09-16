import React from 'react';
import List from '.';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders a list of to dos based on state.toDos', () => {
  const list = shallow(<List />);

  list.setState({
    toDos: [
      {complete: false, text: 'One'},
      {complete: false, text: 'Two'}
    ]
  });

  expect(toJson(list)).toMatchSnapshot()

});
