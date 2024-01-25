import React, { Component } from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    task: '',
    deadline: '',
    done: false,
    todoList: [],
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  };

  handleSubmit = () => {
    const { task, deadline, done, todoList } = this.state;

    const newTodo = {
      id: Date.now(),
      task,
      deadline,
      done,
    };

    this.setState({
      todoList: [...todoList, newTodo],
      task: '',
      done: false,
      deadline: '',
    });
  };

  render() {
    const { task, done, deadline, todoList } = this.state;

    return (
      <>
        <header>
          <div className="container">
            <h1>What to.do</h1>

            <Form
              task={ task }
              done={ done }
              deadline={ deadline }
              handleChange={ this.handleChange }
              handleSubmit={ this.handleSubmit }
            />
          </div>
        </header>
        <div className="container">

          <TodoList
            todoList={ todoList }
          />
        </div>
      </>
    );
  }
}

export default App;
