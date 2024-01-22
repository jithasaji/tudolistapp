import React, { Children, createContext, useState } from 'react'
export const newTaskContext = createContext()

function TaskListContext({children}) {
    const [newTask, setNewTask] = useState('');

  return (
    
    <div>
     <newTaskContext.Provider value={{newTask,setNewTask}} >
        {children}
     </newTaskContext.Provider>
    </div>
  )
}

export default TaskListContext
