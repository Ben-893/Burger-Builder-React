import React from "react";

import CSS from "./Burger.css";
import Ingredients from "./BurgerIngredients/Ingredients";

const burger = (props) => {
  return (
    <div className={CSS.Burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="cheese" />
      <Ingredients type="meat" />
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default burger;
