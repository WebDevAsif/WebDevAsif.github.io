import { useState } from "react";
import style from "../Navbar/Navbar.module.css";
import getImageUrl from "../../utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "+918789787472";

  const handleCallButtonClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.navbar}>
      <div className={style.navSection}>
        <div className={style.logoSection}>
          <a href="/">
            <img src={getImageUrl("new_logo.png")} alt="logo" className={style.logoImage} />
          </a>
        </div>

        <div onClick={handleMenuToggle} className={style.iconSection}>
          {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>

        <nav className={`${style.navListSection} ${menuOpen && style.menuOpen}`}>
          <ul className={style.navItems} onClick={handleMenuToggle}>
            <li className={style.navLink}>
              <a href="#home">Home</a>
            </li>
            <li className={style.navLink}>
              <a href="#about" className={style.about}>
                About
              </a>
            </li>
            <li className={style.navLink}>
              <a href="#services">Services</a>
            </li>
            <li className={style.navLink}>
              <a href="#skills" className={style.skills}>
                Skills
              </a>
            </li>
            <li className={style.navLink}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <button className={style.navbarContact} onClick={handleCallButtonClick}>
            <p>+918789787472</p>
          </button>
        </nav>
      </div>
    </header>
  );
}
