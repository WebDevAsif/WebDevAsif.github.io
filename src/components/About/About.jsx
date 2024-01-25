import getImageUrl from "../../utils";
import style from "../About/About.module.css";

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.aboutSection}>
        <div className={style.headingSection}>
          <h2 className={style.heading}>
            About <span>Me</span>
          </h2>
          <hr />
        </div>
        <div className={style.detailSection}>
          <div className={style.imageSection}>
            <img src={getImageUrl("picsart.jpg")} alt="userImage" className={style.image} />
          </div>
          <div className={style.descSection}>
            <div className={style.biography}>
              <img src={getImageUrl("apna college.png")} alt="apna college" />
              <div className={style.zone}>
                <p>Full-Stack Web Development</p>
                <p>2023 - Present</p>
                <p>Apna College</p>
              </div>
            </div>
            <div className={style.biography}>
              <img src={getImageUrl("patliputra.png")} alt="patliputra" />
              <div className={style.zone}>
                <p>Bachelor of Commerce</p>
                <p>2018 - 2021</p>
                <p>Patliputra University, Patna</p>
              </div>
            </div>
            {/* <div className={style.biography}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
