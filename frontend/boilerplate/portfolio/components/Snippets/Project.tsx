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
            height={250}
            width={500}
            className="project__image"
          />
        )}
      </a>
      <h3 className="heading-three | u-center-text">{project.title}</h3>
      <div className="u-mt-sm u-mx-auto | u-flex u-items-center">
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
