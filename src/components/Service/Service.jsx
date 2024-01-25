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
              <img src={getImageUrl("asset 12.jpeg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>Web Development</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour
              </p>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.cardImage}>
              <img src={getImageUrl("asset 13.jpeg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>App Development</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour
              </p>
            </div>
          </div>
          <div className={style.cardSection}>
            <div className={style.cardImage}>
              <img src={getImageUrl("asset 14.jpeg")} alt="projectImage" />
            </div>
            <div className={style.cardTitle}>
              <h1>Game Development</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
