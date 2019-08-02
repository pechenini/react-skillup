import React from "react";
import '../../../css/Form.css';

const Button = ({label, type = 'submit'}) => {
  return <button className="form-button" type={type}>{label}</button>;
};

export default Button;
