import React from 'react';

const Textfield = ({ label, type, id, placeholder, spellCheck, className, disabled, value, onChange, name }) => {
  return (
    <div className="form-group flex flex-col space-y-2">
      <label htmlFor={id} className="w-1/4">{label}</label>
      <input
        type={type} 
        id={id} 
        spellCheck={spellCheck} 
        required 
        placeholder={placeholder}
        className={`p-5 border border-gray-300 rounded focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 ${className}`}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Textfield;
