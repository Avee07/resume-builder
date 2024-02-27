import React, { useState } from "react";
import styles from "../Editor/Editor.module.css";
import InputControl from "../InputControl/InputControl";

function Editor(props) {
  const sections = props.sections;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            <p className={styles.title}>{sections[key]}</p>
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Title" />
      <InputControl label="Subtitle" />
      </div>
    </div>
  );
}

export default Editor;
