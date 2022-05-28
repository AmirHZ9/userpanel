import React from 'react';
import styles from "../Style/SidebarSetting.module.css"
import { gearIcon } from '../assets/icons/icons'
export default function SidebarSetting() {
  return (
    <div className={styles.sidebarSetting}>
        <div className={styles.sidebarSettingIcon}>
            <span>{gearIcon}</span>
        </div>


    </div>
  )
}
