const Input = (props) => {
  return (
    <div>
      <div
        style={{
          color: 'blur',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label htmlFor="name">What is Your {props.lable} ?</label>
        <input type={props.type} id={props.id} />
      </div>
    </div>
  );
};

export default Input;
