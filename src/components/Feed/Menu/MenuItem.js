import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ label, to, icon, isActive,...rest }) => {
  return (
    <div className={"menu-item" + (isActive ? " menu-item-active" : "")} >
      <Link className="menu-link" {...rest} to={to}>
        <div className="menu-link-icon">{icon}</div>
        <div>{label}</div>
      </Link>
    </div>
  );
};

export default MenuItem;
