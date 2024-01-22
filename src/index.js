import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskListContextProvider from './Context/TaskListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskListContextProvider>
      <App />
    </TaskListContextProvider>
  </React.StrictMode>,
);
