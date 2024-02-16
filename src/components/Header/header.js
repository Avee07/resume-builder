import React from "react";
import styles from "../Header/header.module.css";
import resumeSvg from '../../assets/resume.svg';
function header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that Stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
    </div>
  );
}

export default header;
