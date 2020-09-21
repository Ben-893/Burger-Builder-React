import React from "react";

import CSS from "./Button.css";

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[CSS.Button, CSS[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
