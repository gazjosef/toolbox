import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";

interface ProjectProps {
  project: {
    title: string;
    cover_image: string;
    excerpt: string;
    categories: string[];
    tag: string;
    github: string;
    live: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project">
      <a href={`${project.live}`}>
        {project.cover_image && (
          <Image
            src={project.cover_image}
            alt={project.title}
            height={200}
            width={400}
            className="project__image"
          />
        )}
      </a>
      <div className="project__title">
        <h3 className="heading-three">{project.title}</h3>
      </div>
      <div className="project__buttons">
        <a className="project__button" href={`${project.github}`}>
          <IconContext.Provider value={{}}>
            <FaGithub className="u-mr-0_75" /> READ
          </IconContext.Provider>
        </a>

        <a className="project__button" href={`${project.live}`}>
          <IconContext.Provider value={{}}>
            <FaEye className="u-mr-0_75" /> LIVE
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default Project;
