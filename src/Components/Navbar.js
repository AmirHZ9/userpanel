import React, { useEffect,useRef } from "react";
import styles from "../Style/Navbar.module.css";

import { closeSidebar } from "../function/function";
import {
  searchIcon,
  dashboardIcon,
  alertIcon,
  userIcon,
  menuIcon
} from "../assets/icons/icons";
export default function Navbar() {
  const sidebar =document.getElementsByName('sidebar')
  const sidebarCloseBtn = document.getElementsByName('sidebarCloseBtn')
  useEffect(()=>{
  },[])
  let open = true;
  const closeSidebar=()=>{
    sidebar[0].style.transition="0.3s"
    sidebar[0].style.overflow="hidden"

    if(open){
      sidebar[0].style.width = '100px';
      open=false
      }else{
        sidebar[0].style.width = '260px';
        open=true
      }

    
  } 
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarMain}>
        <button className={styles.sidebarBTN} name="sidebarCloseBtn" onClick={closeSidebar}><span>{menuIcon}</span></button>
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
