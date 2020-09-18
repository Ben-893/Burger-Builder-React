import React from "react";

import CSS from "./Input.css";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={CSS.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={CSS.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={CSS.InputElement} value={props.value}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={CSS.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={CSS.Input}>
      <label className={CSS.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
