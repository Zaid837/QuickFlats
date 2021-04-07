import React from "react";

const Input = ({ name, value, onChange, error, type }) => {
  return (
    <div className="form-group mb-3">
      <input
        type={type}
        name={name}
        placeholder={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
