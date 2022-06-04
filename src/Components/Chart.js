import React from "react";
import styles from "../Style/Chart.module.css";
export default function Chart() {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <div className={styles.firstChart}></div>
        <div className={styles.chartText}>
          <h4>Daily Sales</h4>
          <p>
            <span>55%</span>increase in today sales.
          </p>
        </div>
        
        <p className={styles.chartTimeUpdate}>updated 4 minutes ago</p>
      </div>

      <div className={styles.chart}>
        <div className={styles.secondChart}></div>
        <div className={styles.chartText}>
          <h4>Email Subscriptions</h4>
          <p>Last Campaign Performance</p>
        </div>

        <p className={styles.chartTimeUpdate}>campaign sent 2 days ago</p>
      </div>

      <div className={styles.chart}>
        <div className={styles.thirdChart}></div>
        <div className={styles.chartText}>
          <h4>Completed Tasks</h4>
          <p>Last Campaign Performance</p>
        </div>

        <p className={styles.chartTimeUpdate}>campaign sent 2 days ago</p>
      </div>
    </div>
  );
}
