import style from "../Service/Service.module.css";
import getImageUrl from "../../utils";

export default function Service() {
  return (
    <div className={style.service} id="services">
      <div className={style.serviceSection}>
        <div className={style.headingSection}>
          <h2 className={style.heading}>
            My <span>Services</span>
          </h2>
          <hr className={style.line} />
        </div>
        <div className={style.projectSection}>
          <div className={style.cardSection}>
            <div className={style.cardImage}>
              <img src={getImageUrl("web.jpg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>Web Development</h1>
              <p>
                Experienced in web development, adept at creating responsive and visually appealing websites. Proficient
                in utilizing modern technologies to deliver seamless and user-friendly online experiences for diverse
                audiences.
              </p>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.cardImage}>
              <img src={getImageUrl("app.jpg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>App Development</h1>
              <p>
                Skilled in app development, proficient in creating user-friendly and feature-rich mobile applications. A
                collaborative team player dedicated to delivering high-quality and intuitive mobile experiences for
                diverse user needs.
              </p>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.cardImage}>
              <img src={getImageUrl("game.jpg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>Game Development</h1>
              <p>
                Experienced in game development, adept at crafting captivating gameplay and graphics using
                industry-standard tools. Collaborative team player with a passion for delivering engaging and immersive
                gaming experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
