import React from 'react';
import PropTypes from 'prop-types';


export default class NewToDo extends React.Component {

  static propTypes = {submit: PropTypes.func.isRequired}

  state = {toDo: ''}

  submitTodo = event => {
    event.preventDefault();
    this.props.submit(this.state.toDo)
    this.setState(() => ({toDo: ''}))
  }

  handleChange = ({target: {value}}) => {
    this.setState({toDo: value})
  }

  render() {
    const {toDo} = this.state;

    return (
      <form className="new-to-do" onSubmit={this.submitTodo}>
        <input
          className="new-to-do__input"
          onChange={this.handleChange}
          placeholder="what needs to be done?"
          type="text"
          value={toDo}
        />
      </form>
    )
  }
}
