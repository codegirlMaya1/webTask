import React, { useState } from 'react';
import Admin from './Admin';
import Employee from './Employee';
import './App.css';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
  ]);

  const toggleRole = () => setIsAdmin(!isAdmin);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName, completed: false }]);
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="App">
      <button onClick={toggleRole}>
        Switch to {isAdmin ? 'Employee' : 'Admin'} View
      </button>
      {isAdmin ? (
        <Admin tasks={tasks} addTask={addTask} />
      ) : (
        <Employee tasks={tasks} completeTask={completeTask} />
      )}
    </div>
  );
};

export default App;
