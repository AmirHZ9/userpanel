import React from "react";
import styles from "../Style/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarMain}>
        <button className={styles.sidebarBTN}>...</button>
        <h3 className={styles.navbarTitle}>Dashboard</h3>
      </div>

      <div className={styles.navbarRightSection}>
        <input type="text" placeholder="Search" className={styles.searchInput}/>
        <button className={styles.searchBTN}>#</button>
        <ul className={styles.navbarList}>
            <li>#</li>
            <li>#</li>
            <li>#</li>
        </ul>
      </div>
    </div>
  );
}
