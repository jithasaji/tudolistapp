// src/components/Task.js

import React from 'react';

const Task = ({ task, toggleTask, removeTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>{task.title}</span>
      <div>
        <button style={{marginRight:"5px"}}  onClick={() => toggleTask(task.id)}>Complete</button>
        <button  onClick={() => removeTask(task.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Task;
