import React, { useState } from 'react';

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');

  function handleInput(event) {
    setTodoInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    props.addTodo(todoInput);
    setTodoInput('');
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
