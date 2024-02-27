import React from "react";
import styles from "./Body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";


const colors = ["#ff0000", "#00ff00", "#0000ff"];

const sections = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievements: "Achievements",
  summary: "Summary",
  other: "Other",
};

function Body() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              className={styles.color}
              style={{ backgroundColor: item }}
            />
          ))}
        </div>
        <button className={styles.add}>
          Download <ArrowDown />
        </button>
      </div>
      <div className={styles.main}>
        <Editor sections = {sections} />
      </div>
    </div>
  );
}

export default Body;
