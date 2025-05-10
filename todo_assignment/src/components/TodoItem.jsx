import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, updateTodo, toggleEdit }) {
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, editText);
  };

  return (
    <div>
      {todo.isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => toggleEdit(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
