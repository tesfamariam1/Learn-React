import '../reset.css';
import '../App.css';
import React, { Component } from 'react';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Finish React Series',
          isComplete: false,
        },
        {
          id: 2,
          title: 'Go to Home',
          isComplete: false,
        },
        {
          id: 3,
          title: 'Go to Grocery',
          isComplete: false,
        },
        {
          id: 4,
          title: 'Do other things',
          isComplete: false,
        },
      ],
    };
  }
  addTodo = event => {
    event.preventDefault();

    this.setState(prevState => {
      const newTodos = [
        ...prevState.todos,
        {
          id: 5,
          title: 'This is class based component',
          isComplete: false,
        },
      ];

      return { todos: newTodos };
    });
  };
  render() {
    return (
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form action="#" onSubmit={this.addTodo}>
            <input
              type="text"
              className="todo-input"
              placeholder="What do you need to do?"
            />
          </form>

          <ul className="todo-list">
            {this.state.todos.map((todo, index) => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" />
                  <span className="todo-item-label">{todo.title}</span>
                </div>
                <button className="x-button">
                  <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="check-all-container">
            <div>
              <div className="button">Check All</div>
            </div>

            <span>3 items remaining</span>
          </div>

          <div className="other-buttons-container">
            <div>
              <button className="button filter-button filter-button-active">
                All
              </button>
              <button className="button filter-button">Active</button>
              <button className="button filter-button">Completed</button>
            </div>
            <div>
              <button className="button">Clear completed</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
