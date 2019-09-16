import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({complete, deleteToDo, text, toggleCompletion}) => (

  <div className="to-do">
    <div className={complete ? "to-do__info--complette" : "to-do__info"}>
      <input
        checked={complete}
        className="to-do_completion"
        onChange={toggleCompletion}
        type="checkbox"
      />
      {text}
    </div>

    <button onClick={deleteToDo}>X</button>
  </div>

);

ToDo.propTypes = {
  complete: PropTypes.bool.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggleCompletion: PropTypes.func.isRequired
}

export default ToDo;

