import React from "react";
import styles from "../Style/DashboardStatics.module.css";
export default function DasboardStatics() {
  return (
    <div className={styles.DasboardStatics}>
      <div className={styles.statcis}>
        <div className={styles.statcisBox}>
          <div className={styles.statcisBoxTopSection}>
            <div className={styles.staticsUsedSpace}></div>
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
            <div className={styles.staticsRevenue}></div>
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
            <div className={styles.staticsFixedIssues}></div>
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
            <div className={styles.staticsFollowers}></div>
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
