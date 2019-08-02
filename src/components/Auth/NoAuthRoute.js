import React from "react";
import Auth from "../../services/auth";
import { Redirect, Route } from "react-router-dom";

function NoAuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !Auth.isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default NoAuthRoute;
