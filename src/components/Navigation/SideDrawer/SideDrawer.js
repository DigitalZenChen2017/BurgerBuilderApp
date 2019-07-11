// This component may be used in place of the Main Navigation Bar on MOBILE DEVICES

// Consist of SideDrawer and Button Component
import React from "react";

import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const sideDrawer = props => {
  // ...
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
