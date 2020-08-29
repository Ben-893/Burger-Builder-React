import React from "react";

import CSS from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={CSS.Toolbar}>
    <div>MENU</div>
    <div className={CSS.Logo}>
      <Logo />
    </div>
    <nav className={CSS.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
