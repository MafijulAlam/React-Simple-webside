import React, { useState } from 'react';
import Layout from '../layout/Layout';
import shortid from 'shortid';
import CreateTask from '../tasks/createTask/CreateTask';
import ShowTask from '../tasks/showTask/ShowTask';
import FilterButton from '../tasks/filterButton/FilterButton';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [visability, setVisability] = useState('all');

  const addNewTask = (text) => {
    const task = {
      text: text,
      id: shortid.generate(),
      createdAt: new Date(),
      isCompleted: false,
    };
    console.log(task);
    setTasks([...tasks, task]);
  };

  function toggleComplet(id) {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTasks(newTasks);
  }

  function deleteHandler(id) {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  }

  function handlerVisibility(text) {
    setVisability(text);
  }

  function getFilteredTasks() {
    if (visability === 'inCompleted')
      return tasks.filter((item) => !item.isCompleted);
    if (visability === 'completed')
      return tasks.filter((item) => item.isCompleted);
    return tasks;
  }

  return (
    <Layout>
      <h1>Todo App</h1>
      <CreateTask addNewTask={addNewTask} />
      <FilterButton handlerVisibility={handlerVisibility} />
      <ShowTask
        tasks={getFilteredTasks()}
        toggleComplet={toggleComplet}
        deleteHandler={deleteHandler}
      />
    </Layout>
  );
};

export default Todo;
