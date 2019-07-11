import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log(igKey); // returns each ingredient property in state
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        console.log(...Array(props.ingredients[igKey]));
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prevvalue, currentValue) => {
      return prevvalue.concat(currentValue);
    }, []);
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please starting add ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
