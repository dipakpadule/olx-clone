import React from "react";
import AdCard from "./AdCard";
import styles from "./Adds.module.css";

const ads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Adds = () => {
  return (
    <div className={styles.adlist}>
      {ads.map((ad) => (
        <AdCard />
      ))}
    </div>
  );
};

export default Adds;
