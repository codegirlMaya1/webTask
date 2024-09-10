import React, { useState } from 'react';

const Admin = ({ tasks, addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="Admin">
      <h2> Hi! Please add a task and switch to the employee view.... <em>(to confirm the task was added) </em></h2>  
      <h2>Admin Section</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;