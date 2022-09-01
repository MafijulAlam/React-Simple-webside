const varian = {
  primary: {
    backgroundColor: '#2196f3',
    color: '#fff',
  },
  success: {
    backgroundColor: '#4caf50',
    color: '#000',
  },
  error: {
    backgroundColor: '#f44336',
    color: '#fff',
  },
};
const Button = ({ type, text, variant }) => {
  const colorVariant = varian[variant];
  return (
    <div>
      <button
        type={type}
        style={{
          ...colorVariant,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
