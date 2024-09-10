import React from 'react';

const Employee = ({ tasks, completeTask }) => {
  return (
    <div className="Employee">
      <h2>Employee Section</h2>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;