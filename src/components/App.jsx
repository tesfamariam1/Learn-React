import '../reset.css';
import '../App.css';
import { useState } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go to Home',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Go to Grocery',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 4,
      title: 'Do other things',
      isComplete: false,
      isEditing: false,
    },
  ]);
  const [idForTodo, setIdForTodo] = useState(5);
  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todo,
        isComplete: false,
      },
    ]);
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }
  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }
  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }
  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }
  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }
  function cancelEdit(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <>
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={todo.id} className="todo-item-container">
                  <div className="todo-item">
                    <input
                      type="checkbox"
                      onChange={() => completeTodo(todo.id)}
                      checked={todo.isComplete ? true : false}
                    />
                    {!todo.isEditing ? (
                      <span
                        onDoubleClick={() => markAsEditing(todo.id)}
                        className={`todo-item-label ${
                          todo.isComplete ? 'line-through' : ''
                        }`}
                      >
                        {todo.title}
                      </span>
                    ) : (
                      <input
                        type="text"
                        onBlur={event => updateTodo(event, todo.id)}
                        onKeyDown={event => {
                          if (event.key === 'Enter') {
                            updateTodo(event, todo.id);
                          } else if (event.key === 'Escape') {
                            cancelEdit(event, todo.id);
                          }
                        }}
                        className="todo-item-input"
                        defaultValue={todo.title}
                        autoFocus
                      />
                    )}

                    {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="x-button"
                  >
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
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
