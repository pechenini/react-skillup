import React from "react";
import "../../../css/Menu.css";
import MenuItem from "./MenuItem";
import TiHome from "react-icons/lib/ti/home";
import TiNews from "react-icons/lib/ti/news";
import TiUser from "react-icons/lib/ti/user";

const Menu = props => {
    console.log(props.location)
  return (
    <div className="menu">
      <MenuItem
        to="/"
        icon={<TiHome />}
        isActive={props.location.pathname == "/"}
        label="Home"
      />
      <MenuItem to="/" icon={<TiNews />} label="Explore" />
      <MenuItem to="/" icon={<TiUser />} label="Profile" />
    </div>
  );
};

export default Menu;
