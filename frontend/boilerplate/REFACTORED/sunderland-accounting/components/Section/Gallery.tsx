import React from "react";
import Team, { TeamMember } from "../Snippets/Gallery/Team";

const Gallery: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Jamie Ryder",
      position: "Founding Partner & Chairman",
      image_src: "/images/team/ellipse-150x150/jamie-ryder.png",
    },
    {
      name: "Jenete Ekwueme",
      position: "Managing Partner",
      image_src: "/images/team/ellipse-150x150/jenete-ekwueme.png",
    },
    {
      name: "Vihrat Singh",
      position: "Accounting & Tax Manager",
      image_src: "/images/team/ellipse-150x150/vihrat-singh.png",
    },
    {
      name: "Isabella Telfer",
      position: "Associate Director",
      image_src: "/images/team/ellipse-150x150/isabella-telfer.png",
    },
  ];

  return (
    <article>
      <div className="container">
        <section className="gallery">
          {team.map((member) => {
            return <Team member={member} key={member.name} />;
          })}
        </section>
      </div>
    </article>
  );
};
export default Gallery;
