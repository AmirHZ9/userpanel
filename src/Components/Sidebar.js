import React, { useEffect} from "react";
import styles from "../Style/Sidebar.module.css";
import pic from "../assets/pics/personimages/amirhz.jpg";
import {downArrowIcon, reacticon,img,dashboardIcon,componentsIcon,formIcon,tableIcons,mapIcon,widgetIcon,calendarIcon,chartIcon } from "../assets/icons/icons";
export default function Sidebar() {
  const menu = document.getElementsByName("menu");

  useEffect(() => {
    // accordianMenu******
    for (let i = 0; i < menu.length; i++) {
      menu[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.logo}>
            <span className={styles.dashboardLogo}>{reacticon}</span>
            <p className={styles.title}>CREATIVE</p>
          </div>

          <div className={styles.personal}>
            <div
              className={styles.personalInfo}
              id="personalInfo"
              name="menu"
            >
              <div className={styles.personalName}>
                <img src={pic} alt="amirhz" />
                <p>AmirHZ</p>
              </div>
              <div>
              <span  className={styles.downArrowIcon}>{downArrowIcon}</span>
              </div>
            </div>
            <div className={styles.panel}>
              <ul>
                <li>
                  <span>MP</span> My Profile
                </li>
                <li>
                  <span>EP</span> Edit Profile
                </li>
                <li>
                  <span>S</span> Setting
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.dashboard}>
            <p className={styles.dashboardTitle}>
              <span className={styles.dashboardLogo}>{dashboardIcon}</span> Dashboard
            </p>
            <div className={styles.dashboardList}>
              <ul className={styles.List}>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                  <span className={styles.dashboardLogo}>{img}</span>
                    <p>
                       Pages
                    </p>

                  </div>
                  <ul className={styles.panel}>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>PP</span> Pricing
                        Page
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>RS</span> RTL
                        Support
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>T</span> Timeline
                        Page
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>L</span> Login
                        Page
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>R</span> Register
                        Page
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>LS</span> Lock
                        Screen Page
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>UP</span> User
                        Profile
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>EP</span> Error
                        Page
                      </p>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{componentsIcon}</span> Components
                    </p>
                  </div>
                  <ul className={styles.panel}>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>B</span>Buttons
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>GS</span> Grid
                        System
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>P</span> Panels
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>SA</span> Sweet
                        Alert
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>N</span>{" "}
                        Notifications
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>I</span> Icons
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>T</span>{" "}
                        Typeogrphy
                      </p>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{formIcon}</span> Forms
                    </p>
                  </div>
                  <ul className={styles.panel}>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>RF</span> Regular
                        Forms
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>EF</span>{" "}
                        Extended Forms
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>VF</span>{" "}
                        Validation Forms
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>W</span> Wizard
                      </p>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{tableIcons}</span> Tables
                    </p>
                  </div>
                  <ul className={styles.panel}>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>RT</span> Regular
                        Tables
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>ET</span>Extended
                        Tables
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>RT</span>React
                        Tables
                      </p>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{mapIcon}</span> Maps
                    </p>
                  </div>
                  <ul className={styles.panel}>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>GM</span> Google
                        Maps
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>FSM</span> Full
                        Screen Map
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.dashboardLogo}>VM</span> Vector
                        Map
                      </p>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{widgetIcon}</span> Widgets
                    </p>
                  </div>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{chartIcon}</span> Charts
                    </p>
                  </div>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemTitle} name="menu">
                    <p>
                      <span className={styles.dashboardLogo}>{calendarIcon}</span> Calendar
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
