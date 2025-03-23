/*const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <p> ADD OUR CREW HERE </p>
  );
};*/
import React from "react";
import "./OurCrew.css";


const crewMembers = [
  {
    name: "Douglas Hurley",
    role: "Astronaut",
    image: "/crew/image-douglas-hurley.png",
    description: "Douglas is a NASA astronaut and engineer, known for his work on the Space Shuttle program."
  },
  {
    name: "Mark Shuttleworth",
    role: "Entrepreneur",
    image: "/crew/image-mark-shuttleworth.png",
    description: "Mark is the founder of Ubuntu and the first African in space."
  },
  {
    name: "Victor Glover",
    role: "Astronaut",
    image: "/crew/image-victor-glover.png",
    description: "Victor is a NASA astronaut and was part of the first operational flight of SpaceX Crew Dragon."
  },
  {
    name: "Anusheh Ansari",
    role: "Space Entrepreneur",
    image:"/crew/image-anousheh-ansari.png", 
    description: "Anusheh Ansari is a space entrepreneur and the first Iranian woman in space, passionate about making space exploration accessible to all."
  }
];

const OurCrew = () => {
  return (
    <div className="crew-container">
      {crewMembers.map((member, index) => (
        <div key={index} className="crew-card">
          <img src={member.image} alt={member.name} className="crew-image" />
          <h3 className="crew-name">{member.name}</h3>
          <p className="crew-role">{member.role}</p>
          <p className="crew-description">{member.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurCrew;



  