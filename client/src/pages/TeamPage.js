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
      .get("/missioncontent/")
      .then((result) => setMissionContent(result.data.data[0]))
      .catch((error) => console.log(error));

    axios
      .get("/teamcontent/")
      .then((result) => setTeamContent(result.data.data))
      .catch((error) => console.log(error));
  }, [location, props]);

  return (
    <div className={styles.wrapper}>
      <MissionCard
        header={missionContent.header}
        bodytext={missionContent.bodytext}
      />
      <div className={styles.section}>
        <h2>Our Team</h2>

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
