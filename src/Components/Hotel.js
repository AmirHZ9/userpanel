import React from "react";
import styles from "../Style/Hotel.module.css";
import barcellona from "../assets/pics/hotelImage/barcellona.jpeg";
import london from "../assets/pics/hotelImage/london.jpeg";
import milan from "../assets/pics/hotelImage/milan.jpeg";
export default function Hotel() {
  return (
    <div className={styles.hotelContainer}>
      <h1>Manage Listings</h1>
      <div className={styles.hotelList}>
        <div className={styles.hotel}>
          <div className={styles.hotelImg}>
            <img src={barcellona} alt="barcellona" />
          </div>
          <div className={styles.hotelInfo}>
            <a>Cozy 5 Stars Apartment</a>
            <p>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className={styles.hotelCost}>
            <p>$899/night</p>
            <span>Barcelona, Spain</span>
          </div>

        </div>

        <div className={styles.hotel}>
          <div className={styles.hotelImg}>
            <img src={london} alt="london" />
          </div>
          <div className={styles.hotelInfo}>
            <a>Office Studio</a>
            <p>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the night life in
              London, UK.
            </p>
          </div>

          <div className={styles.hotelCost}>
            <p>$1.119/night</p>
            <span>London, UK</span>
          </div>
        </div>

        <div className={styles.hotel}>
          <div className={styles.hotelImg}>
            <img src={milan} alt="milan" />
          </div>
          <div className={styles.hotelInfo}>
            <a>Beautiful Castle</a>
            <p>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Milan.
            </p>
          </div>

          <div className={styles.hotelCost}>
            <p>$459/night</p>
            <span>Milan, Italy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
