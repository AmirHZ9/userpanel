import React from "react";
import styles from "../Style/Navbar.module.css";
import {
  searchIcon,
  dashboardIcon,
  alertIcon,
  userIcon,
  menuIcon
} from "../assets/icons/icons";
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarMain}>
        <button className={styles.sidebarBTN}><span>{menuIcon}</span></button>
        <h3 className={styles.navbarTitle}>Dashboard</h3>
      </div>

      <div className={styles.navbarRightSection}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <button className={styles.searchBTN}>
          <span>{searchIcon}</span>
        </button>
        <ul className={styles.navbarList}>
          <li><span>{dashboardIcon}</span></li>
          <li >
            <span className={styles.alertIcon}>{alertIcon} 
            <span className={styles.alertNotif}>5</span>
          </span>
          </li>
          <li><span>{userIcon}</span></li>
        </ul>
      </div>
    </div>
  );
}
