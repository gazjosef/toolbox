import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";
import Label from "./Label";

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
  let categories = project.categories;

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
      <div className="project__labels">
        {categories &&
          categories.map((category) => (
            <Label key={category}>{category}</Label>
          ))}
      </div>
      <div className="project__buttons">
        <button className="btn btn--inverse">
          <a
            className="u-flex u-items-center u-justify-center u-gap-1"
            href={`${project.github}`}
          >
            <IconContext.Provider value={{}}>
              <FaGithub /> READ
            </IconContext.Provider>
          </a>
        </button>

        <button className="btn btn--inverse">
          <a
            className="u-flex u-items-center u-justify-center u-gap-1"
            href={`${project.live}`}
          >
            <IconContext.Provider value={{}}>
              <FaEye /> LIVE
            </IconContext.Provider>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
