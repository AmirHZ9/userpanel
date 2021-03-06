import React, { useEffect } from "react";
import styles from "../Style/Navbar.module.css";
// icons
import {
  searchIcon,
  dashboardIcon,
  alertIcon,
  userIcon,
  menuIcon,
  bars,
} from "../assets/icons/icons";
export default function Navbar() {
  const sidebar = document.getElementsByName("sidebar");
  const par = document.getElementsByTagName("p"); //sidbar pargragh
  const mainDashboard = document.getElementsByName("mainDashboard"); //MainDashboard
  const ResponsiveSidebar = document.getElementsByName("ResponsiveSidebar");
  const windowBackgound = document.getElementsByName('windowBackgound')
  let allowOpenDashboardOnHover = true;
  useEffect(() => {
    sidebar[0].addEventListener("mouseenter", () => {
      if (allowOpenDashboardOnHover && sidebar[0].style.width == "100px") {
        mainDashboard[0].style.width = "calc(100% - 260px)";
        sidebar[0].style.width = "260px";
        allowOpenDashboardOnHover = false;
      }
    });
    sidebar[0].addEventListener("mouseleave", () => {
      if (allowOpenDashboardOnHover == false) {
        mainDashboard[0].style.width = "calc(100% - 100px)";
        sidebar[0].style.width = "100px";
        allowOpenDashboardOnHover = true;
      }
    });
  }, []);

  let open = true;
  const closeSidebar = (event) => {
    sidebar[0].style.transition = "0.3s";
    if (open) {
      sidebar[0].style.width = "100px";
      mainDashboard[0].style.width = "calc(100% - 100px)";

      open = false;
    } else {
      sidebar[0].style.width = "260px";
      mainDashboard[0].style.width = "calc(100% - 260px)";
      open = true;
    }
    for (let i = 0; i < 39; i++) {
      par[i].style.transition = "0.2s";
      par[i].style.overflow = "hidden";
      if (open === false) {
        par[i].style.opacity = "0";
      } else {
        par[i].style.opacity = "1";
      }
    }
  };
const openResponsiveSidebar = () => {
  ResponsiveSidebar[0].style.right="0px"
  windowBackgound[0].style.display="block"

}
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarMain}>
        <button
          className={styles.sidebarBTN}
          name="sidebarCloseBtn"
          onClick={closeSidebar}
        >
          <span>{menuIcon}</span>
        </button>
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
          <li>
            <span>{dashboardIcon}</span>
          </li>
          <li>
            <span className={styles.alertIcon}>
              {alertIcon}
              <span className={styles.alertNotif}>5</span>
            </span>
          </li>
          <li>
            <span>{userIcon}</span>
          </li>
        </ul>
      </div>

      <button className={styles.bars} onClick={openResponsiveSidebar}>
        <span>{bars}</span>
      </button>
    </div>
  );
}
