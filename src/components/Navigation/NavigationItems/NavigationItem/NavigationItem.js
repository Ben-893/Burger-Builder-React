import React from "react";
import { NavLink } from "react-router-dom";

import CSS from "./NavigationItem.css";

const navigationItem = (props) => (
  <li className={CSS.NavigationItem}>
    <NavLink to={props.link} exact={props.exact} activeClassName={CSS.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
