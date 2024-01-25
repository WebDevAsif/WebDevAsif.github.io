import style from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.copyright}>
      <div>
        <div className={style.content}>
          <p>&copy; Copyright & &reg; Registered : 2024 | All Right Reserved by Asif Bin Sabir.</p>
        </div>
      </div>
    </div>
  );
}
