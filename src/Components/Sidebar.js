import React, {useRef} from "react";
import styles from "../Style/Sidebar.module.css";
import pic from "../assets/pics/personimages/amirhz.jpg";
import { accordianMenu } from "../function/function";
export default function Sidebar() {

  const myMenu = useRef(null);


  return (
    <div>   
      <div className={styles.sidebar}>
        <div className={styles.sidebarShadow}>
          <div className={styles.logo}>
            <p className={styles.title}>CREATIVE</p>
          </div>

          <div className={styles.personal}>
            <div className={styles.personalInfo} id ="personalInfo" onClick={() => accordianMenu(myMenu.current)}>
              <div className=" d-flex align-items-center">
                <img src={pic} alt="amirhz" />
                <p>AmirHZ</p>
              </div>
              <div>
                  <p>#</p>
              </div>
            </div>
            <div className={styles.panel} ref={myMenu}>
                <ul>
                    <li><span>MP</span> My Profile</li>
                    <li><span>EP</span> Edit Profile</li>
                    <li><span>S</span> Setting</li>

                </ul>
            </div>
          </div> 
        </div>
      </div>

      
    </div>
  );
}
