import React from "react";
import styles from "../Style/GlobalLocation.module.css";
import { countryList } from "../shared/Country";
import { globe } from "../assets/icons/icons";
import { esMill } from '@react-jvectormap/spain';
import { VectorMap } from '@south-paw/react-vector-maps';
export default function GlobalLocation() {
  return (
    <div className={styles.globalLocation}>
      <div className={styles.globalIcon}><span>{globe}</span></div>
      <div className={styles.globalContainer}>
        <div>
        <h2 className={styles.globalConainerTitle}>
          Global Sales by Top Location
        </h2>
        <ul className={styles.countryList}>
          {countryList.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.country} />
              <span className={styles.countryName}>{item.country}</span>
              <span className={styles.countryStatics}>{item.statistics}</span>
              <span className={styles.countryPercent}>{item.percent}</span>
            </li>
          ))}
        </ul>

        </div>


      <div className={styles.map}>
      <VectorMap map={esMill}   />
      </div>



      </div>
    </div>
  );
}
