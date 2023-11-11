import React from "react";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <div className={styles.navBar}>
      <ul>
        <li>Home</li>
        <li>User</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
