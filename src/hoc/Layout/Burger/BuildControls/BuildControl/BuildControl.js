import React from "react";
import CSS from "./BuildControl.css";

const buildControl = (props) => (
  <div className={CSS.BuildControl}>
    <div className={CSS.Label}>{props.label}</div>
    <button
      className={CSS.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={CSS.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
