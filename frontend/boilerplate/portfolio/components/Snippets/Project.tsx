import React, { useRef } from "react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

interface ProjectProps {
  project: {
    frontmatter: {
      categories: string[];
      cover_image: string;
      title: string;
      excerpt: string;
      github: string;
      live: string;
    };
  };
}

export default function Project({ project }: ProjectProps) {
  const [projectTitleRef, projectImgRef, projectTextRef] = useGsapFadeDown();

  let categories = project.frontmatter.categories;

  return (
    <div
      className="post"
      ref={projectTitleRef as React.RefObject<HTMLDivElement>}
    >
      <a href={`${project.frontmatter.live}`}>
        {project.frontmatter.cover_image && (
          <Image
            src={project.frontmatter.cover_image}
            alt={project.frontmatter.title}
            height={250}
            width={500}
            className="post__image"
          />
        )}
      </a>
      <div className="post__description | u-min-h-min u-px-2 u-py-2 | u-flex u-flex-col u-gap-2_5">
        <h3 className="heading-three | u-center-text">
          {project.frontmatter.title}
        </h3>

        <div className="post__description">
          <p>{project.frontmatter.excerpt}</p>
        </div>

        <div className="post__label">
          {categories &&
            categories.map((category, index) => (
              // <CategoryLabel key={index}>{category}</CategoryLabel>
            ))}
        </div>

        <div className="u-mt-sm u-mx-auto | u-flex u-items-center">
          <a className="post__button" href={`${project.frontmatter.github}`}>
            <IconContext.Provider value={{}}>
              <FaGithub className="u-mr-0_75" /> READ
            </IconContext.Provider>
          </a>

          <a className="post__button" href={`${project.frontmatter.live}`}>
            <IconContext.Provider value={{}}>
              <FaEye className="u-mr-0_75" /> LIVE
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}
