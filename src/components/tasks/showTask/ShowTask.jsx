import React from 'react';
import classes from './ShowTask.module.css';

const ShowTask = ({ tasks, toggleComplet, deleteHandler }) => {
  return (
    <div className={classes.showItem}>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              // onClick={() => toggleComplet(task.id)}
              style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
              }}
            >
              <input type="checkbox" onChange={() => toggleComplet(task.id)} />
              <button onClick={() => deleteHandler(task.id)}>Delete</button>
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Task Found</h3>
      )}
    </div>
  );
};

export default ShowTask;
