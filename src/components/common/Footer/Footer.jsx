import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p className={style.footerText}>
          &copy; 2024 Asif Bin Sabir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
