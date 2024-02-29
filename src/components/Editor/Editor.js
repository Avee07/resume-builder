import React, { useState } from "react";
import styles from "../Editor/Editor.module.css";
import InputControl from "../InputControl/InputControl";

function Editor(props) {
  const sections = props.sections;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Software Engineer"
        />
        <InputControl
          label="Company"
          placeholder="Enter Company Name eg: Google"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter Certificate Link"
        />
        <InputControl label="Location" placeholder="Enter Location eg: Delhi" />
      </div>
      <div className={styles.row}>
        <InputControl
          type="date"
          label="Start Date"
          placeholder="Enter Start date of work"
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of work"
        />
      </div>
      <div className={styles.column}>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Chat Application"
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          type="date"
          label="Start Date"
          placeholder="Enter Start date of education"
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of education"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Total Marks / CGPA"
          placeholder="Enter total marks/cgpa"
        />
        <InputControl
          label="Obtained Marks / CGPA"
          placeholder="Enter obtained marks/cgpa"
        />
      </div>

      <div className={styles.column}>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg: B.Tech" />
        <InputControl
          label="College / School Name"
          placeholder="Enter name of your college / school"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Deployed Link" placeholder="Enter Deployed Link" />
        <InputControl label="GitHub Link" placeholder="Enter GitHub Link" />
      </div>

      <div className={styles.column}>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Full Name"
          placeholder="Enter your full name eg: Rahul Verma"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg: Software Engineer"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn Link"
        />
        <InputControl
          label="GitHub Link"
          placeholder="Enter your GitHub Link"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter your email address eg: abcd@gmail.com"
        />
        <InputControl
          type="number"
          label="Contact"
          placeholder="Enter your number eg: 9876543210"
        />
      </div>

      <div className={styles.column}>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Summary"
          placeholder="Enter your objective / summary"
        />
      </div>
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Other" placeholder="Enter Something here" />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return basicInfoBody;
    }
  };

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
        <InputControl label="Title" placeholder="Enter Section Title" />
        <div className={styles.chips}>
          <div className={styles.chip}>
            <p>Project 1</p>
            {/* <X /> */}
          </div>
          <div className={styles.chip}>
            <p>Project 2</p>
            {/* <X /> */}
          </div>
        </div>
        {generateBody()}
      </div>
    </div>
  );
}

export default Editor;
