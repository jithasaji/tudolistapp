// src/components/TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
