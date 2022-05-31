import React from "react";
import DasboardStatics from "./DasboardStatics";
import GlobalLocation from "./GlobalLocation";
import Navbar from "./Navbar";
import SidebarSetting from "./SidebarSetting";
import styles from "../Style/mainDashboard.module.css"
export default function MainDashboard() {
  return (
    <div className={styles.MainDashboard} name="mainDashboard">
      <Navbar />
      <DasboardStatics />
      <SidebarSetting />
      <GlobalLocation />
    </div>
  );
}
