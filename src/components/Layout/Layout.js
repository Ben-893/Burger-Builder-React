import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import CSS from './Layout.css';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={CSS.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;
