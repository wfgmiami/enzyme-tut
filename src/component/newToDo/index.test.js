import React from 'react';
import {shallow} from 'enzyme';
import NewToDo from '.';



describe('<NewToDo/>', () => {

  const props = {
    submit: () => null
  }

  it('handles input change on state', () => {
    // const newToDo = shallow(<NewToDo {...props}/>)
    // newToDo.instance().handleChange({target: {value: 'some to do text'}});

    // expect(newToDo.state().toDo).toBe('some to do text')

    const newToDo = shallow(<NewToDo submit={()=>{}} />);

    newToDo.find('.new-to-do__input').simulate('change',
      {target: {value: 'give a talk'}
    })

    expect(newToDo.state().toDo).toBe('give a talk')
  })

  it('calls props.submit on submit', () => {
    const submit = jest.fn();
    // const preventDefault = jest.fn();

    const toDo = shallow(<NewToDo submit={submit} />)
    toDo
      .find('.new-to-do__input')
      .simulate('change', {target: {value: 'hit 100% coverage'}})
    toDo
      .find('.new-to-do')
      .simulate('submit', {preventDefault() {}})

    expect(submit).toHaveBeenCalledWith('hit 100% coverage');

  });

  it('clears state on submit', () => {
    const toDo = shallow(<NewToDo submit={()=> {}} />)

    toDo
      .find('.new-to-do__input')
      .simulate('change', {target: {value: 'hit almost 100% coverage'}})

    toDo
      .find('.new-to-do')
      .simulate('submit', { preventDefault() {} })
    expect(toDo.state().toDo).toBe('')
  });

  it('calls prevent default', () => {
    const toDo = shallow(<NewToDo submit={ () => {} } />)
    const preventDefault = jest.fn();

    toDo
      .find('.new-to-do__input')
      .simulate('change', {target:{ value: '100% coverage'}})

    toDo
      .find('.new-to-do')
      .simulate('submit', { preventDefault })

    expect(preventDefault).toHaveBeenCalled();
  })

})
