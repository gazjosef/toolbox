import Image from "next/image";
import React from "react";

export interface TeamMember {
  name: string;
  position: string;
  image_src: string;
}

const Team: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <section className="team">
      <div className="team__img">
        <Image
          src={member.image_src}
          alt={member.name}
          objectFit="contain"
          width={200}
          height={200}
        />
      </div>
      <div className="team__desc">
        <h3 className="heading-three ">{member.name}</h3>
        <h3 className="heading-three heading-three--light">
          {member.position}
        </h3>
      </div>
    </section>
  );
};
export default Team;
