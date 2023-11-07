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
      <h1>{project.title}</h1>
      <p>{project.excerpt}</p>
      <div>
        <a className="post__button" href={`${project.github}`}>
          <IconContext.Provider value={{}}>
            <FaGithub /> READ
          </IconContext.Provider>
        </a>
        <a className="post__button" href={`${project.live}`}>
          <IconContext.Provider value={{}}>
            <FaEye /> LIVE
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default Project;
