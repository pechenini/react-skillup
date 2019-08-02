import React from "react";
import FormWrapper from "../../Common/Form/FormWrapper";
import "../../../css/Login.css";
import { useState } from "react";
import Auth from "../../../services/auth";
import Input from "../../Common/Form/Input";
import Button from "../../Common/Form/Button";

function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Auth.register({
      data: { email, password, name },
      onSuccess: user => props.history.push("/"),
      onError: err => setError(err.response.data.message)
    });
  };

  return (
    <FormWrapper onSubmit={e => handleSubmit(e)} className="login-form">
      <div className="form-title">{props.label}</div>
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
      <Button label="Register" />
      </div>
    </FormWrapper>
  );
}

export default RegisterForm;
