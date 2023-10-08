import { useEffect, useRef } from "react";
import useGsapFadeIn from "../hooks/useGsapFadeIn";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  image_src: string;
}

const team: TeamMember[] = [
  {
    name: "Jamie Ryder",
    position: "Founding Partner & Chairman",
    image_src:
      "/images/team/tinified/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
  },
  {
    name: "Jenete Ekwueme",
    position: "Managing Partner",
    image_src:
      "/images/team/tinified/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
  },
  {
    name: "Isabella Telfer",
    position: "Associate Director",
    image_src:
      "/images/team/tinified/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg",
  },
  {
    name: "Jing Chao",
    position: "Accounting & Tax Manager",
    image_src:
      "/images/team/tinified/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
  },
];
const About: React.FC = () => {
  return <div>About</div>;
};
export default About;
