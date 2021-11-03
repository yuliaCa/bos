import styles from "./TeamPage.module.css";
import React from "react";
import MissionCard from "../components/Team/MissionCard";
import MemberCard from "../components/Team/MemberCard";
import axios from "axios";
import { useState, useEffect } from "react";

const TeamPage = () => {
  const [missionContent, setMissionContent] = useState({});
  const [teamContent, setTeamContent] = useState([{}]);

  // Temporary hard code, teamContent will be pull from mongodb

  useEffect(() => {
    axios
      .get("/missioncontent/")
      .then((result) => setMissionContent(result.data.data[0]))
      .catch((error) => console.log(error));

    axios
      .get("/teamcontent/")
      .then((result) => setTeamContent(result.data.data))
      .catch((error) => console.log(error));

    // setMissionContent({
    //   header: "Our Mission",
    //   bodytext:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur.",
    // });

    // setTeamContent([
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Fatemeh Heydarilarinezhad",
    //     role: "UX/UI Design",
    //     intro:
    //       "Has a background of web and graphic design and project management . Will work on UX and UI.",
    //     link1: "#",
    //     github: "false",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Mark Suria",
    //     role: "Backend Developer",
    //     intro:
    //       "Has a background developing back-end in software application and database programming. Will work on back-end development and database programming that includes coding data related functions and data mapping.",
    //     link1: "#",
    //     github: "true",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Javier Gongora",
    //     role: "Full-Stack Developer",
    //     intro:
    //       "Has a Bachelor of Science in Organizational Psychology, with experience in corporate eLearning and medical imaging. Will work on the backend and frontend development.",
    //     link1: "#",
    //     github: "true",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Yujeong Park",
    //     role: "PM & UI/UX Designer",
    //     intro:
    //       "Has a background of Communications in Marketing and Business Marketing. Will work on UX mainly for this project. As a PM, my role is to communicate with Tyler and Tomoko on behalf of our group and communicate better within our teammates.",
    //     link1: "#",
    //     github: "false",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Yulia Kirienko",
    //     role: "Full-Stack Developer",
    //     intro:
    //       "Has a background in Hospitality Management.  In collaboration with other developers, creating the React app at the front-end and connecting it with the back-end technologies, such as MongoDB.",
    //     link1: "#",
    //     github: "true",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Olha Sukharieva",
    //     role: "UX/UI Designer & Graphic Designer",
    //     intro:
    //       "Has a background in graphic design, working in a design studio and as a marketing designer in the marketing department.",
    //     link1: "#",
    //     github: "false",
    //     link2: "#",
    //   },
    //   {
    //     src: "https://picsum.photos/500/300",
    //     name: "Douglas Leung",
    //     role: "Full-Stack Developer",
    //     intro:
    //       "Background in Finance and Real Estate.  I will offer my past knowledge and experience in investing to develop a profitable and viable business model for this application.  I will be working alongside the other 3 developers to code the front- and back-end, focusing mainly on functionality and performance.",
    //     link1: "#",
    //     github: "true",
    //     link2: "#",
    //   },
    // ]);
  }, []);

  return (
    <div>
      <MissionCard
        header={missionContent.header}
        bodytext={missionContent.bodytext}
      />
      <div className={styles.section}>
        <h2>Our Team</h2>

        {teamContent.map((member) => (
          <MemberCard
            key={member.name}
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
