import React from 'react';
import classes from './FilterButton.module.css';
const FilterButton = ({ handlerVisibility }) => {
  return (
    <div className={classes.filterBtn}>
      <button onClick={() => handlerVisibility('all')}>All</button>
      <button onClick={() => handlerVisibility('completed')}>Completed</button>
      <button onClick={() => handlerVisibility('inCompleted')}>
        Uncompleted
      </button>
    </div>
  );
};

export default FilterButton;
