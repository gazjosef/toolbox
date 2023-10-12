import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  position: string;
  image_src: string;
}

const Gallery: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Jamie Ryder",
      position: "Founding Partner & Chairman",
      image_src:
        "/public/images/team/tinified/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
      // "/images/team/tinified/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
    },
    {
      name: "Jenete Ekwueme",
      position: "Managing Partner",
      image_src:
        "/public/images/team/tinified/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
      // "/images/team/tinified/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
    },
    {
      name: "Isabella Telfer",
      position: "Associate Director",
      image_src:
        "/public/images/team/tinified/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg",
      // "/images/team/tinified/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg",
    },
    {
      name: "Jing Chao",
      position: "Accounting & Tax Manager",
      image_src:
        "/public/images/team/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
      // "/images/team/tinified/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
    },
  ];

  return (
    <section className="article-about__gallery">
      {team.map((member, index) => {
        return (
          <section className="article-about__team | u-relative" key={index}>
            {/* <div className="section-about__img">
              <Image
                src={member.image_src}
                alt={member.name}
                objectFit="contain"
                layout="fill"
              />
            </div> */}
            <div className="article-about__desc">
              <h3 className="heading-three">{member.position}</h3>
              <h3 className="heading-three heading-three--lighter">
                {member.name}
              </h3>
            </div>
          </section>
        );
      })}
    </section>
  );
};
export default Gallery;
