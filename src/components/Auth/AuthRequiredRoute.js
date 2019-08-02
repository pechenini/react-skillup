import React from "react";
import Auth from "../../services/auth";
import { Redirect, Route } from "react-router-dom";

function AuthRequiredRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRequiredRoute;
