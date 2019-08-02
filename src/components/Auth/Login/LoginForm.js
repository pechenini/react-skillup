import React from "react";
import FormWrapper from "../../Common/Form/FormWrapper";
import "../../../css/Login.css";
import { useState } from "react";
import Auth from "../../../services/auth";
import Input from "../../Common/Form/Input";
import Button from "../../Common/Form/Button";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Auth.login({
      email,
      password,
      onSuccess: user => props.history.push("/"),
      onError: err => {
        console.log(err);
        setError(err.response.data.message)
      }
    });
  };

  return (
    <FormWrapper onSubmit={e => handleSubmit(e)} className="login-form">
      <div className="form-title">{props.label}</div>
      <Input
        type="text"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error ? <span className="form-error-message">{error}</span> : ""}
      <div className="form-element form-element-centered">
        <Button label="Login" />
      </div>
    </FormWrapper>
  );
}

export default LoginForm;
