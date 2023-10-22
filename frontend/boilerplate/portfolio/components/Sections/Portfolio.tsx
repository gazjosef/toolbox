import React from "react";
import Project from "../Snippets/Project";

interface PortfolioProps {
  projects: ProjectType[]; // Define the type for 'projects'
}

interface ProjectType {
  // Define the structure of a 'project' object
  order: number;
  // Add other properties as needed
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio" className="section | u-bg-primary-200">
      <div className="container | u-mx-auto">
        <section>
          <h1 className="heading-one | u-margin-bottom-medium u-center-text">
            Portfolio
          </h1>
        </section>
      </div>
      <div className="container | u-mx-auto">
        <section className="article-portfolio__grid">
          {projects &&
            projects
              .sort((a, b) => b.order - a.order)
              .map((project, index) => (
                <Project key={index} project={project} />
              ))}
        </section>
      </div>
    </section>
  );
}
