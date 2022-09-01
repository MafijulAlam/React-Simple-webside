import classes from './Input.module.css';

const Input = ({ incress, decress, incressHandler, decressHandler }) => {
  return (
    <div className={classes.input}>
      <label>Incress</label>
      <input
        type="number"
        placeholder="Increase"
        value={incress}
        onChange={incressHandler}
      />
      <label>Decress</label>
      <input
        type="number"
        placeholder="Decrease"
        value={decress}
        onChange={decressHandler}
      />
    </div>
  );
};

export default Input;
