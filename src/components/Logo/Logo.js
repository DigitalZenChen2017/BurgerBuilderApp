import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.BurgerLogo}>
    <img src={BurgerLogo} alt="Burger Logo"></img>
  </div>
);

export default logo;
