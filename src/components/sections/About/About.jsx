import getImageUrl from "../../../utils";
import Seperator from "../../common/Seperator/Seperator";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          <h2 className={styles.sectionTitle}>About</h2>
          <Seperator />
        </div>
        <div className={styles.details}>
          <div className={styles.imageContainer}>
            <img
              src={getImageUrl("aboutImage.jpg")}
              alt="Portrait of the person"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.biographyContainer}>
            <div className={styles.biography}>
              <img
                src={getImageUrl("apna college.png")}
                alt="Apna College Logo"
                className={styles.universityLogo}
              />
              <div className={styles.biographyText}>
                <h3 className={styles.degree}>Full-Stack Web Development</h3>
                <p className={styles.university}>Apna College</p>
                <p className={styles.duration}>2023 - 2024</p>
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
                <p className={styles.university}>Patliputra University, Patna</p>
                <p className={styles.duration}>2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
