import React, { useEffect, useState } from "react";
import styles from "../Editor/Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [values, setValues] = useState({
    name: activeInformation.detail?.name || "",
    title: activeInformation.detail?.title || "",
    linkedin: activeInformation.detail?.linkedin || "",
    github: activeInformation.detail?.github || "",
    email: activeInformation.detail?.email || "",
    phone: activeInformation.detail?.phone || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Software Engineer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company"
          placeholder="Enter Company Name eg: Google"
          defaultValue={values.company}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, company: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter Certificate Link"
          defaultValue={values.certificate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificate: event.target.value }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter Location eg: Delhi"
          defaultValue={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          type="date"
          label="Start Date"
          placeholder="Enter Start date of work"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of work"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Chat Application"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          defaultValue={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          type="date"
          label="Start Date"
          placeholder="Enter Start date of education"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of education"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deployed Link"
          defaultValue={values.deployedLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="GitHub Link"
          placeholder="Enter GitHub Link"
          defaultValue={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: B.Tech"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="College / School Name"
          placeholder="Enter name of your college / school"
          defaultValue={values.college}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Total Marks / CGPA"
          placeholder="Enter total marks/cgpa"
          defaultValue={values.totalMarks}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, totalMarks: event.target.value }))
          }
        />
        <InputControl
          label="Obtained Marks / CGPA"
          placeholder="Enter obtained marks/cgpa"
          defaultValue={values.obtainedMarks}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              obtainedMarks: event.target.value,
            }))
          }
        />
      </div>

      <div className={styles.column}>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Full Name"
          placeholder="Enter your full name eg: Rahul Verma"
          defaultValue={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg: Software Engineer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn Link"
          defaultValue={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="GitHub Link"
          placeholder="Enter your GitHub Link"
          defaultValue={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter your email address eg: abcd@gmail.com"
          defaultValue={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          type="number"
          label="Contact"
          placeholder="Enter your number eg: 9876543210"
          defaultValue={values.contact}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, contact: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Summary"
          placeholder="Enter your objective / summary"
          defaultValue={values.summary}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, summary: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Other"
          placeholder="Enter Something here"
          defaultValue={values.other}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, other: event.target.value }))
          }
        />
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
  const handleSubmition = () => {
    console.log(values);
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
    setValues({
      name: activeInfo.detail?.name || "",
      overview: activeInfo.details ? activeInfo.details[0]?.overview || "" : "",
      startDate: activeInfo.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      startDate: activeInfo.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      certificate: activeInfo.details
        ? activeInfo.details[0]?.certificate || ""
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo.detail.title || "",
      linkedin: activeInfo.detail?.linkedin || "",
      github: activeInfo.detail?.github || "",
      email: activeInfo.detail?.email || "",
      phone: activeInfo.detail?.phone || "",
    });
  }, [activeSectionKey]);

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
        <InputControl
          label="Title"
          placeholder="Enter Section Title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => {
                <div className={styles.chip} key={item.title + index}>
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X />
                </div>;
              })
            : ""}
        </div>
        {generateBody()}
        <button onClick={handleSubmition}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
