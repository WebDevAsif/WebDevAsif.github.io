import style from "./Hero.module.css";
import getImageUrl from "../../utils";

export default function Hero() {
  return (
    <section className={style.heroSection} id="home">
      <div className={style.mainContainer}>
        <div className={style.leftContent}>
          <div className={style.titleContainer}>
            {/* <p className={style.greeting}>Hi, My name is</p> */}
            <h1 className={style.nameTitle}>
              <span className={style.content}>Md Asif</span>
            </h1>
            <p className={style.profession}>
              <span>Frontend Developer</span>
            </p>
            <p className={style.description}>
              Step into the digital realm curated by <span>Md Asif</span>, where
              creativity meets cutting-edge technology. I'm a frontend developer with a
              passion for crafting seamless and engaging user interfaces. Armed with HTML,
              CSS, and JavaScript, I specialize in harnessing the power of React to bring
              dynamic and interactive elements to life. Join me as we explore the art of
              frontend development and create modern, user-centric websites that leave a
              lasting impression.
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

            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className={style.downloadButton}>
            <a href={getImageUrl("Md-Asif-Resume.pdf")} download="Md-Asif-Resume.pdf">
              <button className={style.downloadLink}>Resume</button>
            </a>
          </div>
        </div>
        <div className={style.rightContent}>
          <div className={style.imageContainer}>
            <img src={getImageUrl("portfolio.png")} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
