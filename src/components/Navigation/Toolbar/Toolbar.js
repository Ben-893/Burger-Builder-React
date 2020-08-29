import React from "react";

import CSS from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={CSS.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={CSS.Logo}>
      <Logo />
    </div>
    <nav className={CSS.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
