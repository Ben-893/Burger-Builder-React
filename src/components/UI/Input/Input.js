import React from "react";

import CSS from "./Input.css";

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={CSS.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={CSS.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={CSS.InputElement} {...props} />;
  }

  return (
    <div className={CSS.Input}>
      <label className={CSS.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
