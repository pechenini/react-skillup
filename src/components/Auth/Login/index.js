import React from "react";
import "../../../css/Login.css";
import LoginForm from "./LoginForm";

function Login(props) {
  return (
      <div className="content-wrapper login-wrapper">
      <LoginForm label="Login" history={props.history} />
      </div>
  );
}

export default Login;
