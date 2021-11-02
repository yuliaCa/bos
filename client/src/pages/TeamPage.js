import React from "react";
import MissionCard from "../components/Team/MissionCard";
import MemberCard from "../components/Team/MemberCard";
import axios from "axios";
import { useState, useEffect } from "react";

const TeamPage = () => {
  const [teamContent, setTeamContent] = useState({});

  // [temporary solution] teamContent will be pull from mongodb
  useEffect(() => {
    setTeamContent({
      header: "Our Mission",
      bodytext:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam obcaecati exercitationem harum rerum veniam consectetur excepturi, neque hic, aliquid ipsum voluptate modi nostrum odit quidem provident autem dolorum. Fugit, non aliquid necessitatibus molestiae accusamus velit. Corporis dignissimos voluptates quaerat, assumenda incidunt quis exercitationem iure distinctio vitae accusamus asperiores consequatur.",
      members: [
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
        {
          name: "Name",
          role: "Role",
          intro:
            "Introduction on themselves lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          link1: "link1",
          link2: "link2",
          link3: "link3",
        },
      ],
    });
  }, []);

  return (
    <div>
      <MissionCard heading="Our Mission" bodytext={teamContent.bodytext} />

      <h2>Our Team</h2>
      <MemberCard src="" alt="" heading="" bodytext="" links="" />
    </div>
  );
};

export default TeamPage;
