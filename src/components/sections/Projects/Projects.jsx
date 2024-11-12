import style from "./Projects.module.css";
import getImageUrl from "../../../utils";
import projects from "../../../data/project.json";
import { useState } from "react";
import Button from "../../common/Button/Button";
import Seperator from "../../common/Seperator/Seperator";

export default function Service() {
  const [expandProject, setExpandProject] = useState(null);
  const maxLength = 80;

  const toggleExpand = (projectId) => {
    setExpandProject(projectId === expandProject ? null : projectId);
  };

  return (
    <section className={style.projects} id="projects">
      <div className={style.projectsSection}>
        <div className={style.headingSection}>
          <h2 className={style.heading}>Projects</h2>
          <Seperator />
        </div>
        <div className={style.projectCardContainer}>
          {projects.map((project, index) => (
            <div className={style.projectCard} key={index}>
              <div className={style.card}>
                <div className={style.cardImage}>
                  <img src={getImageUrl(project.image)} alt="projectImage" />
                </div>
                <div className={style.cardTitle}>
                  <h1>{project.title}</h1>
                  <h4>
                    {expandProject === index
                      ? project.description
                      : `${project.description.slice(0, maxLength)}...`}
                    <div className={style.links}>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Link&nbsp;<i className="fa-solid fa-link"></i>
                      </a>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Link&nbsp;
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </h4>
                  <Button
                    label={expandProject === index ? "See less" : "See more"}
                    onClick={() => toggleExpand(index)}
                    className={style.projectBtn}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
