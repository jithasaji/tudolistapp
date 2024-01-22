// src/components/TaskForm.js

import React, { useContext, useState } from 'react';
import { newTaskContext } from '../Context/TaskListContext';

const TaskForm = ({ addTask }) => {
    const {newTask,setNewTask} = useContext(newTaskContext)
//   const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;
