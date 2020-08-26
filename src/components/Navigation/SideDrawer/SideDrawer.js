import React from "react";

import CSS from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  return (
    <div className={CSS.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
