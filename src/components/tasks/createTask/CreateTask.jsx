import React, { useState } from 'react';
import classes from './CreateTask.module.css';

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState('');

  function createHandler(e) {
    setText(e.target.value);
  }
  function buttonHandler() {
    if (text) {
      addNewTask(text);
    } else {
      alert('Please Insert Data');
    }
    setText('');
  }
  return (
    <div className={classes.addItem}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={createHandler}
      />
      <button onClick={buttonHandler}>Create Task</button>
    </div>
  );
};

export default CreateTask;
