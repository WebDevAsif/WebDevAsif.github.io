import getImageUrl from "../../utils";
import styles from "../About/About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.highlight}>Me</span>
          </h2>
          <hr className={styles.sectionDivider} />
        </div>
        <div className={styles.details}>
          <div className={styles.imageContainer}>
            <img src={getImageUrl("aboutImage.jpg")} alt="Portrait of the person" className={styles.profileImage} />
          </div>
          <div className={styles.biographyContainer}>
            <div className={styles.biography}>
              <img src={getImageUrl("apna college.png")} alt="Apna College Logo" className={styles.universityLogo} />
              <div className={styles.biographyText}>
                <h3 className={styles.degree}>Full-Stack Web Development</h3>
                <p className={styles.duration}>2023 - Present</p>
                <p className={styles.university}>Studying at Apna College</p>
              </div>
            </div>
            <div className={styles.biography}>
              <img
                src={getImageUrl("patliputra.png")}
                alt="Patliputra University Logo"
                className={styles.universityLogo}
              />
              <div className={styles.biographyText}>
                <h3 className={styles.degree}>Bachelor of Commerce</h3>
                <p className={styles.duration}>2015 - 2028</p>
                <p className={styles.university}>Graduated from Patliputra University, Patna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
