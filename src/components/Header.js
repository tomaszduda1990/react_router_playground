import React from "react";
import { NavLink } from "react-router-dom";
const style = {
  color: "red",
  fontWeight: "bold"
};

export default () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink to="/" activeStyle={style} exact>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeStyle={style}>
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeStyle={style}>
      Contact
    </NavLink>
  </div>
);
