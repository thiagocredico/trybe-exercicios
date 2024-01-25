import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/todo-list.css';

class TodoList extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <ul className="todo-list">
        {
          todoList.map((todo) => (
            <li key={ todo.id }>
              <div>
                <input type="checkbox" disabled checked={ todo.done } />
                <p>{todo.task}</p>
              </div>

              <p>{todo.deadline}</p>
            </li>
          ))
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
