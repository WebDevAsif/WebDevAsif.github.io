import style from "../Skills/Skills.module.css";
import skills from "../../data/skills.json";
import getImageUrl from "../../utils";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
  return (
    <div className={style.skills} id="skills">
      <div className={style.title}>
        <h2>Skills</h2>
        <hr />
      </div>
      <div className={style.skillsDepartment}>
        <div className={style.skillsSection}>
          {skills.map((skill) => (
            <div key={uuidv4()} className={style.skillsImage}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
