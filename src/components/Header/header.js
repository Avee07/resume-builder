import React from "react";
import styles from "../Header/header.module.css";

function header() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        A <span>Resume</span> that Stands out!
      </p>
      <p className={styles.heading}>
        You can make your own resume <span>It's Free</span>
      </p>
    </div>
  );
}

export default header;
