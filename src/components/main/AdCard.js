import React from "react";
import wishlist from "./Wishlist.svg";
import styles from "./AdCard.module.css";

const AdCard = () => {
  return (
    <div className={styles.adcard}>
      <a href="/">
        <figure className="itemimage">
          <img
            src="https://apollo-singapore.akamaized.net:443/v1/files/tqyer3g3to8c1-IN/image;s=272x0"
            alt="SAMSUNG"
          />
        </figure>
        <div className={styles.itemdetails}>
          <span className={styles.itemprice}>₹ 6,104</span>
          <span className={styles.itemtitle}>SAMSUNG FRIDGE AVAILABLE</span>
          <div className={styles.locationtime}>
            <span className="itemlocation">Maharashtra</span>
            <span>6 days ago</span>
          </div>
        </div>
      </a>
      <span className={styles.fav}>
        <button type="button" className="favourite" title="Favourite">
          <img src={wishlist} alt="fav" />
        </button>
      </span>
    </div>
  );
};

export default AdCard;
