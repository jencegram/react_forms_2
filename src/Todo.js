import React, { useState } from 'react';

function Todo({ id, task, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {newTask}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(id)}>X</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
