import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, updateTodo, toggleEdit }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
