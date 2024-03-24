import React, { useState } from "react";
import Project from "../Snippets/Project";
import jsonData from "./projects.json";

interface ProjectData {
  title: string;
  excerpt: string;
  cover_image: string;
  categories: string[];
  tag: string;
  github: string;
  live: string;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects =
    filter === "all"
      ? jsonData
      : jsonData.filter((project) => project.tag.includes(filter));

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="grid__header">
          <ul role="list" className="grid__filter-btns">
            <li role="listitem">
              <button
                className={`btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
            </li>
            <li role="listitem">
              <button
                className={`btn ${filter === "apps" ? "active" : ""}`}
                onClick={() => setFilter("apps")}
              >
                Apps
              </button>
            </li>
            <li role="listitem">
              <button
                className={`btn ${filter === "games" ? "active" : ""}`}
                onClick={() => setFilter("games")}
              >
                Games
              </button>
            </li>
            <li role="listitem">
              <button
                className={`btn ${filter === "websites" ? "active" : ""}`}
                onClick={() => setFilter("websites")}
              >
                Websites
              </button>
            </li>
          </ul>
        </div>
        <div id="grid-container" className="grid__container">
          {filteredProjects &&
            filteredProjects.map((project: ProjectData) => (
              <Project project={project} key={project.title} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
