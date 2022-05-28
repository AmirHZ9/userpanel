import React from "react";
import styles from "../Style/DashboardStatics.module.css";
import { copyIcon,warningIcon,shopIcon,twitterIcon } from "../assets/icons/icons";
export default function DasboardStatics() {
  return (
    <div className={styles.DasboardStatics}> 
      <div className={styles.statcis}>
   
        <div className={styles.statcisBox}>
          <div className={styles.statcisBoxTopSection}>
            <div className={styles.staticsUsedSpace}><span>{copyIcon}</span></div>
            <div className={styles.statcisBoxDetails}>
              <p className={styles.staticsTitle}>Used Space</p>
              <span>49/50<sub>GB</sub></span>
            </div>
          </div>
          <div className={styles.statcisBottomSection}>
              <p>Get more space</p>
          </div>
        </div>
        <div className={styles.statcisBox}>
          <div className={styles.statcisBoxTopSection}>
            <div className={styles.staticsRevenue}><span>{shopIcon}</span></div>
            <div className={styles.statcisBoxDetails}>
              <p className={styles.staticsTitle}>Revenue</p>
              <span>$34,245</span>
            </div>
          </div>
          <div className={styles.statcisBottomSection}>
              <p>Last 24 Hours</p>
          </div>
        </div>
        <div className={styles.statcisBox}>
          <div className={styles.statcisBoxTopSection}>
            <div className={styles.staticsFixedIssues}><span>{warningIcon}</span></div>
            <div className={styles.statcisBoxDetails}>
              <p className={styles.staticsTitle}>Fixed Issues</p>
              <span>75</span>
            </div>
          </div>
          <div className={styles.statcisBottomSection}>
              <p>Tracked from Github</p>
          </div>
        </div>
        <div className={styles.statcisBox}>
          <div className={styles.statcisBoxTopSection}>
            <div className={styles.staticsFollowers}><span>{twitterIcon}</span></div>
            <div className={styles.statcisBoxDetails}>
              <p className={styles.staticsTitle}>Followers</p>
              <span>+245</span>
            </div>
          </div>
          <div className={styles.statcisBottomSection}>
              <p>Just Updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
