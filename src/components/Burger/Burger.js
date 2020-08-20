import React from "react";

import CSS from "./Burger.css";
import Ingredients from "./BurgerIngredients/Ingredients";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
      return <Ingredients key={ingredientKey + index} type={ingredientKey} />;
    });
  })
  .reduce((prevValue, currentValue) => {
    return prevValue.concat(currentValue)
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={CSS.Burger}>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default burger;
