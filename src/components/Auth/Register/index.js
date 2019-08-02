import React from "react";
import RegisterForm from "./RegisterForm";

function Register(props) {
  return (
    <div className="content-wrapper login-wrapper">
      <RegisterForm label="Registration" history={props.history}/>
    </div>
  );
}

export default Register;
