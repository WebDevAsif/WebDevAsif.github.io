import style from "./Hero.module.css";
import getImageUrl from "../../utils";

export default function Hero() {
  const googleDriveResumeLink = "https://drive.google.com/file/d/1HUp-DMDRe7O8lxgCoLMJyOnUcrP2Dfkg/view?usp=drive_link";
  return (
    <div className={style.Hero} id="home">
      <div className={style.mainSection}>
        <div className={style.leftSection}>
          <div className={style.title}>
            <p className={style.greeting}>Hi, My name is</p>
            <p className={style.nameTitle}>Md Asif</p>
            <p className={style.profession}>
              And I'm a <span>Frontend Developer</span>
            </p>
            <p className={style.description}>
              Step into the digital realm curated by <span>Md Asif</span>, where creativity meets cutting-edge
              technology. I'm a frontend developer with a passion for crafting seamless and engaging user interfaces.
              Armed with HTML, CSS, and JavaScript, I specialize in harnessing the power of React to bring dynamic and
              interactive elements to life. Join me as we explore the art of frontend development and create modern,
              user-centric websites that leave a lasting impression.
            </p>
          </div>
          <div className={style.socialIcons}>
            <a href="https://www.linkedin.com/in/asif-developer/">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/WebDevAsif">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/ibnsabir611">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className={style.downlodBtn}>
            <button className={style.download}>
              <a href={googleDriveResumeLink} target="_blank" rel="noopener noreferrer" download="Resume.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className={style.rightSection}>
          <div className={style.imgSection}>
            <img src={getImageUrl("portfolio.png")} alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
