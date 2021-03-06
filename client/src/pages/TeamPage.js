import styles from "./TeamPage.module.css";
import { useLocation } from "react-router-dom";
import React from "react";
import MissionCard from "../components/Team/MissionCard";
import MemberCard from "../components/Team/MemberCard";
import axios from "axios";
import { useState, useEffect } from "react";

const TeamPage = (props) => {
  const location = useLocation();

  const [missionContent, setMissionContent] = useState({});
  const [teamContent, setTeamContent] = useState([{}]);

  // Temporary hard code, teamContent will be pull from mongodb

  useEffect(() => {
    props.handleIsHome(location);

    axios
      .get("https://bos-project2.herokuapp.com/missioncontent/")
      .then((result) => setMissionContent(result.data.data[0]))
      .catch((error) => console.log(error));

    axios
      .get("https://bos-project2.herokuapp.com/teamcontent/")
      .then((result) => setTeamContent(result.data.data))
      .catch((error) => console.log(error));
  }, [location, props]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.missionHeader}>
      <MissionCard
        header={missionContent.header}
        bodytext={missionContent.bodytext}
      />
      </div>
      <div className={styles.section}>
        <div>
          <h2>Our Team</h2>
        </div>

        {teamContent.map((member, key) => (
          <MemberCard
            key={key}
            src={member.src}
            name={member.name}
            role={member.role}
            bodytext={member.intro}
            link1={member.link1}
            github={member.github}
            link2={member.link2}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
