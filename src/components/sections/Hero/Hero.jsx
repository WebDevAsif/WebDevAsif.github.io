import style from "./Hero.module.css";
import getImageUrl from "../../../utils";
import Button from "../../common/Button/Button";

export default function Hero() {
  return (
    <section className={style.heroSection} id="home">
      <div className={style.mainContainer}>
        <div className={style.leftContent}>
          <div className={style.titleContainer}>
            <p className={style.greeting}>Hello!</p>
            <h1 className={style.nameTitle}>I'm&nbsp;Asif</h1>
            <p className={style.profession}>Frontend Developer</p>
            {/* <p className={style.description}>
              Step into the digital realm curated by <span>Md Asif</span>, where
              creativity meets cutting-edge technology. I'm a frontend developer with a
              passion for crafting seamless and engaging user interfaces. Armed with HTML,
              CSS, and JavaScript, I specialize in harnessing the power of React to bring
              dynamic and interactive elements to life. Join me as we explore the art of
              frontend development and create modern, user-centric websites that leave a
              lasting impression.
            </p> */}
            <p className={style.description}>
              Welcome to the digital realm curated by <span>Md Asif</span>, where
              creativity converges with cutting-edge technology.
              <br /> I am a passionate frontend developer dedicated to crafting seamless
              and engaging user experiences. With expertise in HTML, CSS, JavaScript, and
              a focus on React, I bring dynamic, interactive elements to life. Let’s
              explore the art of frontend development together and create modern,
              user-centric websites that leave a lasting impression.
            </p>
          </div>
          <div className={style.socialIcons}>
            <a
              href="https://www.linkedin.com/in/asif-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/WebDevAsif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className={style.downloadButton}>
            <a href={getImageUrl("Md-Asif-Resume.pdf")} download="Md-Asif-Resume.pdf">
              <Button label={"Resume"} className={style.resumeBtn}>
                <i className="fa-solid fa-download"></i>
              </Button>
            </a>
          </div>
        </div>
        <div className={style.rightContent}>
          <div className={style.imageContainer}>
            <img src={getImageUrl("heroImage.png")} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
