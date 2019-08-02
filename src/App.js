import React from "react";
import Header from "./components/Common/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Register from "./components/Auth/Register";
import Feed from "./components/Feed";
import AuthRequiredRoute from "./components/Auth/AuthRequiredRoute";
import NoAuthRoute from "./components/Auth/NoAuthRoute";

function App() {
  return (
    <div className="App">
      <Router >
      <Header />
      
            <AuthRequiredRoute path="/" exact component={Feed} />
            <NoAuthRoute path="/login" exact component={Login} />
            <NoAuthRoute path="/register" exact component={Register} />
      </Router>
    </div>
  );
}

export default App;
