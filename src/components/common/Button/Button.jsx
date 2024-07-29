import React from "react";
import "./Button.css";

const Button = ({ label, onClick, type = "submit", className, children }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {label} {children}
    </button>
  );
};

export default Button;
