import React, { useRef } from "react";
import styles from "../Style/SidebarSetting.module.css";
import { gearIcon } from "../assets/icons/icons";
import firstImage from "../assets/pics/sidebarpics/reflection-rocky-mountains-sky-beautiful-lake .jpg";
import { openMenu } from "../function/function";
export default function SidebarSetting() {
  const menu = useRef(null);
  return (
    <div className={styles.sidebarSetting}>
      <div
        className={styles.sidebarSettingIcon}
        onClick={() => openMenu(menu.current)}
      >
        <span>{gearIcon}</span>
      </div>

      <div className={styles.sidebarSettingMain} ref={menu}>
        <div className={styles.sidebarSettingColor}>
          <p>SIDEBAR FILTERS</p>
          <div className={styles.sidebarSettingColorItem}>
            <span className={styles.red} date-color="red"></span>
            <span className={styles.blue} date-color="red"></span>
            <span className={styles.green} date-color="red"></span>
            <span className={styles.orange} date-color="red"></span>
            <span className={styles.purple} date-color="red"></span>
            <span className={styles.gray} date-color="red"></span>
            <span className={styles.pink} date-color="red"></span>
          </div>
        </div>
        <div className={styles.sidebarSettingBackgroundColor}>
          <p>SIDEBAR BACKGROUND</p>
          <div className={styles.sidebarSettingBackgroundColorItem}>
            <span className={styles.blueSidebar} date-color="red"></span>
            <span className={styles.graySidebar} date-color="red"></span>
            <span className={styles.blackSidebar} date-color="red"></span>
          </div>
        </div>

        <div className={styles.sidebarDisplayImage}>
          <p>Sidebar Image</p>
          <input type="checkbox" />
        </div>
        <div className={styles.sidebarChangeImage}>
          <p>IMAGE</p>
          <ul>
            <li>
              <img src={firstImage} alt="image" />
            </li>
            <li>
              <img src={firstImage} alt="image" />
            </li>
            <li>
              <img src={firstImage} alt="image" />
            </li>
            <li>
              <img src={firstImage} alt="image" />
            </li>
          </ul>
        </div>
        <div className={styles.settingButton}>
          <button className={styles.buyBtn}>BUY NOW</button>
          <button className={styles.docBtn}>DOCUMENTATION</button>
        </div>
      </div>
    </div>
  );
}
