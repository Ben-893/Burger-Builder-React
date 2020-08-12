import React from "react";

import CSS from "./Ingredients.css";

const ingredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={CSS.BeadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={CSS.BreadTop}>
          <div className={CSS.Seeds1}></div>
          <div className={CSS.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={CSS.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={CSS.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={CSS.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={CSS.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default ingredients;
