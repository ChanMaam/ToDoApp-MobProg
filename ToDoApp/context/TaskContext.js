import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ completedTasks, setCompletedTasks }}>
      {children}
    </TaskContext.Provider>
  );
};