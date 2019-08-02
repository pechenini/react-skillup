import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../../services/auth";

const Logout = props => {
  Auth.logout()
  console.log("123")
  return <Redirect to={{ pathname: "/login" }} />;
};

export default Logout;
