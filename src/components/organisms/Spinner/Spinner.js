import React from "react";
import styles from "./Spinner.module.css";
import clsx from "clsx";
const Spinner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <div className={clsx(styles.wave, styles.topWave)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={clsx(styles.wave, styles.bottomWave)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
