import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
