import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/form.css';

class Form extends Component {
  render() {
    const { task, done, deadline, handleChange, handleSubmit } = this.props;

    return (
      <form className="form">
        <input
          type="text"
          name="task"
          placeholder="Tarefa"
          value={ task }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="deadline"
          placeholder="Prazo"
          value={ deadline }
          onChange={ handleChange }
        />
        <div className="checkbox">
          <input
            type="checkbox"
            name="done"
            checked={ done }
            onChange={ handleChange }
          />
          <p>Já foi feita?</p>
        </div>

        <button type="button" onClick={ handleSubmit }>
          <img src="/x.svg" alt="" />
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  task: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
