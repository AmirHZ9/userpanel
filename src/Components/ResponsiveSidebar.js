import React, { useEffect } from "react";
import styles from "../Style/ResponsiveSidebar.module.css";
import pic from "../assets/pics/personimages/amirhz.jpg";
import {
  reacticon,
  img,
  dashboardIcon,
  componentsIcon,
  formIcon,
  tableIcons,
  mapIcon,
  widgetIcon,
  calendarIcon,
  chartIcon,
  searchIcon,
  alertIcon,
  userIcon,
} from "../assets/icons/icons";
export default function ResponsiveSidebar() {
  const responsiveSidebarmenu = document.getElementsByName("responsiveSidebarmenu");
  const ResponsiveSidebar = document.getElementsByName("ResponsiveSidebar");
  useEffect(() => {
    // accordianresponsiveSidebarMenu******
    for (let i = 0; i < responsiveSidebarmenu.length; i++) {
      responsiveSidebarmenu[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        console.log(panel)
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);
  const closeSidebarResponsive = (event) => {
    ResponsiveSidebar[0].style.right = "-280px";
    event.target.style.display = "none";
  };

  return (
    <div>
      <div className={styles.ResponsiveSidebar} name="ResponsiveSidebar">
        <div className={styles.sidebar} name="sidebar">
          <div className={styles.profile}>
            <div className={styles.logo}>
              <span className={styles.reactLogo}>{reacticon}</span>
              <p className={styles.title}>CREATIVE</p>
            </div>

            <div className={styles.personal}>
              <div
                className={styles.personalInfo}
                id="personalInfo"
                name="responsiveSidebarmenu"
              >
                <div className={styles.personalName}>
                  <img src={pic} alt="amirhz" />
                  <p>AmirHZ</p>
                </div>
              </div>
              <div className={styles.panel}>
                <ul>
                  <li>
                    <span>MP</span>
                    <p>My Profile</p>
                  </li>
                  <li>
                    <span>EP</span>
                    <p>Edit Profile</p>
                  </li>
                  <li>
                    <span>S</span>
                    <p>Setting</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.navbarRightSection}>
                <div className={styles.searchbox}>

              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <button className={styles.searchBTN}>
                <span>{searchIcon}</span>
              </button>
                </div>
              <ul className={styles.navbarList}>
                <li>
                  <span>{dashboardIcon}</span>
                    <p>Dashboard</p>
                </li>
                <li>
                  <span className={styles.alertIcon}>
                    {alertIcon}
                   
                  </span>
                      <p>5 Notification</p>
                </li>
                <li>
                  <span>{userIcon}</span>
                  <p>Notification</p>
                </li>
              </ul>
            </div>
            <div className={styles.dashboard}>
              <div className={styles.dashboardList}>
                <ul className={styles.List} name="dashboardList">
                  <li className={styles.dashboardTitle} name="dashboardTitle">
                    <span className={styles.dashboardLogo}>
                      {dashboardIcon}
                    </span>
                    <p>Dashboard</p>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle} name="responsiveSidebarmenu">
                      <span className={styles.dashboardLogo}>{img}</span>
                      <p>Pages</p>
                    </div>
                    <ul className={styles.panel}>
                      <li>
                        <span className={styles.dashboardLogo}>PP</span>
                        <p>Pricing Page</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>RS</span>
                        <p>Support</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>T</span>
                        <p>Timeline Page</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>L</span>
                        <p>Login Page</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>R</span>
                        <p>Register Page</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>LS</span>
                        <p>Lock Screen Page</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>UP</span>
                        <p>User Profile</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>EP</span>
                        <p>Error Page</p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle} name="responsiveSidebarmenu">
                      <span className={styles.dashboardLogo}>
                        {componentsIcon}
                      </span>
                      <p>Components</p>
                    </div>
                    <ul className={styles.panel}>
                      <li>
                        <span className={styles.dashboardLogo}>B</span>
                        <p>Buttons</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>GS</span>
                        <p>Grid System</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>P</span>
                        <p>Panels</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>SA</span>
                        <p>Sweet Alert</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>N</span>
                        <p>Notifications</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>I</span>
                        <p>Icons</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>T</span>
                        <p>Typeogrphy</p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle} name="responsiveSidebarmenu">
                      <span className={styles.dashboardLogo}>{formIcon}</span>
                      <p>Forms</p>
                    </div>
                    <ul className={styles.panel}>
                      <li>
                        <span className={styles.dashboardLogo}>RF</span>
                        <p>Regular Forms</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>EF</span>
                        <p>Extended Forms</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>VF</span>
                        <p>Validation Forms</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>W</span>
                        <p>Wizard</p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle} name="responsiveSidebarmenu">
                      <span className={styles.dashboardLogo}>{tableIcons}</span>
                      <p>Tables</p>
                    </div>
                    <ul className={styles.panel}>
                      <li>
                        <span className={styles.dashboardLogo}>RT</span>
                        <p>Regular Tables</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>ET</span>
                        <p>Extended Tables</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>RT</span>
                        <p>React Tables</p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle} name="responsiveSidebarmenu">
                      <span className={styles.dashboardLogo}>{mapIcon}</span>
                      <p>Maps</p>
                    </div>
                    <ul className={styles.panel}>
                      <li>
                        <span className={styles.dashboardLogo}>GM</span>
                        <p>Google Maps</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>FSM</span>
                        <p>Full Screen Map</p>
                      </li>
                      <li>
                        <span className={styles.dashboardLogo}>VM</span>
                        <p>Vector Map</p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle}>
                      <span className={styles.dashboardLogo}>{widgetIcon}</span>
                      <p>Widgets</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle}>
                      <span className={styles.dashboardLogo}>{chartIcon}</span>
                      <p>Charts</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listItemTitle}>
                      <span className={styles.dashboardLogo}>
                        {calendarIcon}
                      </span>
                      <p>Calendar</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.windowBackgound}
        onClick={closeSidebarResponsive}
        name="windowBackgound"
      ></div>
    </div>
  );
}
