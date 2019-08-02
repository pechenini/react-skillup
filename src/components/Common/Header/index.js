import React, { useEffect } from "react";
import "../../../css/Header.css";
import HeaderItem from "./HeaderItem";
import Group from "./Group";
import Auth from "../../../services/auth";
import { useSelector } from "react-redux";

function Header(props) {
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (Auth.isLogged()) {
      Auth.user();
      console.log(Auth.user())
    }
  }, []);

  return (
    <div className="header">
      <Group>
        <HeaderItem to="/" label="Home" />
      </Group>
      {!user ? (
        <Group>
          <HeaderItem to="/login" label="Login" />
          <HeaderItem to="/register" label="Register" />
        </Group>
      ) : (
        <Group>
          <div className="header-item">
            <div>Hello, {user.name}</div>
          </div>
          <HeaderItem
            to="/login"
            onClick={() => Auth.logout()}
            label="Logout"
          />
        </Group>
      )}
    </div>
  );
}

export default Header;
