import React from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.css";
import Navbar from "../Navigation/NavBar/NavBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <Navbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
