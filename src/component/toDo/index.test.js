import React from 'react';
import {shallow} from 'enzyme';
import ToDo from './index';

describe("<ToDo/>", () => {

  const props = {
    complete: false,
    deleteToDo: () => null,
    text: "Test ToDo",
    toggleCompletion: () => null
  }

  it('displays text based on props.text', () => {

    const toDo = shallow(<ToDo {...props} />);

    expect(toDo.find('.to-do__info').text()).toBe('Test ToDo')

    toDo.setProps({text: 'New To Do'});
    expect(toDo.find('.to-do__info').text()).toBe('New To Do');
  })

  it('changes input', () => {
    const toggleCompletionSpy = jest.fn();

    const toDo = shallow(
      <ToDo
        complete
        deleteToDo={() => null}
        text='Test ToDo 2'
        toggleCompletion={toggleCompletionSpy}
      />
    )

    toDo.find('.to-do_completion').simulate('change')
    const callback = toggleCompletionSpy.mock.calls.length;
    expect(callback).toBe(1)
    expect(toggleCompletionSpy).toHaveBeenCalled;
  })

})
