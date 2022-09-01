import React from 'react';

const Buttons = ({ title, onClick }) => {
  return (
    <div
      style={{
        display: 'inline-block',
      }}
    >
      <button
        style={{
          backgroundColor: '#404',
          padding: '8px 16px',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Buttons;
