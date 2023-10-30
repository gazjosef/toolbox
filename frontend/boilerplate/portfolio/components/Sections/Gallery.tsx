import React, { useState } from "react";
// import { FaEye, FaGithub } from "react-icons/fa";
import Project from "../Snippets/Project";
// import jsonData from "./projects.json";

interface ProjectData {
  title: string;
  excerpt: string;
  categories: string[];
  tag: string;
  github: string;
  live: string;
  // Add more properties as needed
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("all");
  //   const filteredProjects =
  //     filter === "all"
  //       ? jsonData
  //       : jsonData.filter((project) => project.tag.includes(filter));

  return (
    <div>
      <div className="container">
        <div className="grid__title">
          <h1>Portolio</h1>

          <ul role="list" className="grid__filter-btns">
            <li role="listitem">
              <button onClick={() => setFilter("all")}>All</button>
            </li>
            <li role="listitem">
              <button onClick={() => setFilter("apps")}>Apps</button>
            </li>
            <li role="listitem">
              <button onClick={() => setFilter("games")}>Games</button>
            </li>
            <li role="listitem">
              <button onClick={() => setFilter("websites")}>Websites</button>
            </li>
          </ul>
        </div>
        <div id="grid-container" className="grid__container">
          {/* {filteredProjects &&
            filteredProjects.map((project: ProjectData) => (
              <Project project={project} />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
