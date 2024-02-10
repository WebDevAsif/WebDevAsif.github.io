import style from "../Skills/Skills.module.css";
import skills from "../../data/skills.json";
import getImageUrl from "../../utils";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
  return (
    <section className={style.skillsSection} id="skills">
      <div className={style.container}>
        <div className={style.title}>
          <h2 className={style.sectionTitle}>Skills</h2>
          <hr className={style.sectionDivider} />
        </div>
        <div className={style.skillList}>
          {skills.map((skill) => (
            <div key={uuidv4()} className={style.skillItem}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={style.skillImage} />
              <p className={style.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
