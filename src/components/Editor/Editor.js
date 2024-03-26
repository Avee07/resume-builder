import React, { useEffect, useState } from "react";
import styles from "../Editor/Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;
  const setInformation = props.setInformation;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [values, setValues] = useState({
    name: activeInformation.detail?.name || "",
    title: activeInformation.detail?.title || "",
    linkedin: activeInformation.detail?.linkedin || "",
    github: activeInformation.detail?.github || "",
    email: activeInformation.detail?.email || "",
    phone: activeInformation.detail?.phone || "",
  });

  const handlePointUpdate = (value, index) => {
    setValues((prev) => {
      const tempValues = { ...prev };
      // Ensure points is initialized as an array
      tempValues.points = tempValues.points || [];
      tempValues.points[index] = value;
      return tempValues;
    });
  };

  const handleAdd = () => {
    const currentSectionKey = sections[activeSectionKey];
    const currentDetails = [...activeInformation.details];

    if (
      currentDetails.length === 0 ||
      Object.keys(currentDetails[currentDetails.length - 1]).length > 0
    ) {
      currentDetails.push({});
      setInformation((prev) => ({
        ...prev,
        [currentSectionKey]: {
          ...prev[currentSectionKey],
          details: currentDetails,
        },
      }));
      setActiveDetailIndex(currentDetails.length - 1);
    }
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg: Software Engineer"
          value={values.title || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company"
          placeholder="Enter Company Name eg: Google"
          value={values.company || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, company: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter Certificate Link"
          value={values.certificate || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificate: event.target.value }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter Location eg: Delhi"
          value={values.location || ""}
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
          value={values.startDate || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of work"
          value={values.endDate || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
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
          value={values.title || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          value={values.overview || ""}
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
          value={values.startDate || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          type="date"
          label="End Date"
          placeholder="Enter End date of education"
          value={values.endDate || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deployed Link"
          value={values.deployedLink || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
          }
        />
        <InputControl
          label="GitHub Link"
          placeholder="Enter GitHub Link"
          value={values.githubLink || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
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
          value={values.title || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="College / School Name"
          placeholder="Enter name of your college / school"
          value={values.college || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Total Marks / CGPA"
          placeholder="Enter total marks/cgpa"
          value={values.totalMarks || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, totalMarks: event.target.value }))
          }
        />
        <InputControl
          label="Obtained Marks / CGPA"
          placeholder="Enter obtained marks/cgpa"
          value={values.obtainedMarks || ""}
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
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
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
          value={values.name || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg: Software Engineer"
          value={values.title || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn Link"
          value={values.linkedin || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="GitHub Link"
          placeholder="Enter your GitHub Link"
          value={values.github || ""}
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
          value={values.email || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          type="number"
          label="Contact"
          placeholder="Enter your number eg: 9876543210"
          value={values.contact || ""}
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
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
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
          value={values.summary || ""}
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
          value={values.other || ""}
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
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        props.setInformation((prev) => ({
          prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: {
              ...prev[sections.basicInfo].detail,
              name: values.name,
              title: values.title,
              linkedin: values.linkedin,
              github: values.github,
              email: values.email,
              contact: values.contact,
            },
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
          certificate: values.certificate,
          title: values.title,
          company: values.company,
          location: values.location,
        };
        const existingDetails = information[sections.workExp]?.details || [];
        const tempDetails = [...existingDetails];
        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.project: {
        const tempDetail = {
          title: values.title,
          overview: values.overview,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
          githubLink: values.githubLink,
          deployedLink: values.deployedLink,
        };
        const existingDetails = information[sections.project]?.details || [];
        const tempDetails = [...existingDetails];

        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          college: values.college,
          title: values.title,
          totalMarks: values.totalMarks,
          obtainedMarks: values.obtainedMarks,
          points: values.points,
        };
        const existingDetails = information[sections.education]?.details || [];
        const tempDetails = [...existingDetails];

        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
          },
        }));
        break;
      }
      case sections.achievements: {
        props.setInformation((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            details: [
              ...(prev[sections.achievements]?.details || []),
              { points: [values.points[0]] },
            ],
          },
        }));
        break;
      }

      case sections.summary: {
        props.setInformation((prev) => ({
          prev,
          [sections.summary]: {
            ...prev[sections.summary],
            summary: values.summary,
          },
        }));
        break;
      }
      case sections.other: {
        props.setInformation((prev) => ({
          prev,
          [sections.other]: {
            ...prev[sections.other],
            other: values.other,
          },
        }));
        break;
      }
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    if (!activeInfo) {
      // Handle the case where activeInfo is undefined
      return;
    }
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
    setValues({
      name: activeInfo.detail?.name || "",
      overview: activeInfo.details ? activeInfo.details[0]?.overview || "" : "",
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
        : activeInfo.detail?.title || "",

      linkedin: activeInfo.detail?.linkedin || "",
      github: activeInfo.detail?.github || "",
      email: activeInfo.detail?.email || "",
      phone: activeInfo.detail?.phone || "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      // name: activeInfo.detail?.name || "",
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      certificate: activeInfo.details[activeDetailIndex]?.certificate || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      email: activeInfo.details[activeDetailIndex]?.email || "",
      phone: activeInfo.details[activeDetailIndex]?.phone || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      deployedLink: activeInfo.details[activeDetailIndex]?.deployedLink || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);
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
          value={sectionTitle || ""}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => {
                return (
                  <div
                    className={`${styles.chip} ${
                      activeDetailIndex === index ? styles.active : ""
                    })`}
                    key={item.title + index}
                    onClick={() => setActiveDetailIndex(index)}
                  >
                    <p>
                      {sections[activeSectionKey]} {index + 1}
                    </p>
                    <X
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                    />
                  </div>
                );
              })
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAdd}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}
        <button onClick={handleSubmition}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
