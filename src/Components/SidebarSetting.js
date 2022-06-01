import React, { useRef } from "react";
import styles from "../Style/SidebarSetting.module.css";
import { gearIcon } from "../assets/icons/icons";

// image
import firstImage from "../assets/pics/sidebarpics/sea.jpg";
import dogimg  from "../assets/pics/sidebarpics/dog.jpg"
import unsplash from '../assets/pics/sidebarpics/unsplash.jpg'
import lion from '../assets/pics/sidebarpics/lion.jpg'
import { openMenu } from "../function/function";
export default function SidebarSetting() {
  const dashboardTitle = document.getElementsByName("dashboardTitle");
  const sidebar = document.getElementsByName("sidebar");
  const changeColorHandler = (event) => {
    const color = event.target.attributes[1].nodeValue;
    dashboardTitle[0].style.backgroundColor = color;
    dashboardTitle[0].style.boxShadow =`0 12px 20px -10px ${color}`;
  };

  const changeSidebarBackgoundColor = (event) => {
   const  backgroundColor =event.target.attributes[1].nodeValue
   sidebar[0].style.background  = backgroundColor;
   
  }
  const changeSidebarbackgroundimg = (event) => {
      const image = event.target.attributes[0].nodeValue
      sidebar[0].style.background=`url(${image})`
      console.log(image)
  } 

  const removeSidebarBackground = (event) =>{
    if (event.target.checked){
      sidebar[0].style.background = 'none' 
    }else{
      sidebar[0].style.background = ``
    }
  }
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
            <span
              className={styles.red}
              date-color="#e91e63"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.blue}
              date-color="#00acc1"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.green}
              date-color="#4caf50"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.orange}
              date-color="#ff9800"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.purple}
              date-color="#9c27b0"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.gray}
              date-color="#c8c8c833"
              onClick={changeColorHandler}
            ></span>
            <span
              className={styles.pink}
              date-color="#f44336"
              onClick={changeColorHandler}
            ></span>
          </div>
        </div>
        <div className={styles.sidebarSettingBackgroundColor}>
          <p>SIDEBAR BACKGROUND</p>
          <div className={styles.sidebarSettingBackgroundColorItem}>
            <span className={styles.blueSidebar} date-color="#00acc1" onClick={changeSidebarBackgoundColor}></span>
            <span className={styles.graySidebar} date-color="#c8c8c833" onClick={changeSidebarBackgoundColor}></span>
            <span className={styles.blackSidebar} date-color="rgba(0, 0, 0, 0.6)" onClick={changeSidebarBackgoundColor}></span>
          </div>
        </div>

        <div className={styles.sidebarDisplayImage}>
          <p>Sidebar Image</p>
          <input type="checkbox" onClick={removeSidebarBackground}/>
        </div>
        <div className={styles.sidebarChangeImage}>
          <p>IMAGE</p>
          <ul>
            <li>
              <img src={firstImage} alt=""  onClick={changeSidebarbackgroundimg}/>
            </li>
            <li>
              <img src={dogimg} alt=""  onClick={changeSidebarbackgroundimg}/>
            </li>
            <li>
              <img src={lion} alt=""  onClick={changeSidebarbackgroundimg}/>
            </li>
            <li>
              <img src={unsplash} alt=""  onClick={changeSidebarbackgroundimg}/>
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
