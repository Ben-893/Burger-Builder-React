import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import CSS from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main className={CSS.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;
