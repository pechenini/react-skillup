import React from "react";
import { Link } from "react-router-dom";

function HeaderItem({ to, label, ...rest }) {
  return (
    <div className="header-item">
      <Link className="header-link" {...rest} to={to}>
        {label}
      </Link>
    </div>
  );
}

export default HeaderItem;
