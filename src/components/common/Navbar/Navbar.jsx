import { useState, useEffect, useCallback } from "react";
import style from "../Navbar/Navbar.module.css";
import getImageUrl from "../../../utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Close menu if clicked outside
  const handleClickOutside = useCallback(
    (event) => {
      if (menuOpen && !event.target.closest(`.${style.navSection}`)) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  // Close menu with Escape key
  const handleKeyDown = useCallback(
    (event) => {
      if (menuOpen && event.key === "Escape") {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  // Attach event listeners
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <header className={style.navbar}>
      <div className={style.navSection}>
        <div className={style.logoSection}>
          <a href="/">
            <img
              src={getImageUrl("3D Logo.png")}
              alt="Logo"
              className={style.logoImage}
            />
          </a>
        </div>

        <div
          onClick={handleMenuToggle}
          className={style.iconSection}
          aria-expanded={menuOpen}
          role="button"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </div>

        <nav className={`${style.navListSection} ${menuOpen && style.menuOpen}`}>
          <ul className={style.navItems}>
            <li className={style.navLink}>
              <a href="#home">Home</a>
            </li>
            <li className={style.navLink}>
              <a href="#about">About</a>
            </li>
            <li className={style.navLink}>
              <a href="#projects">Projects</a>
            </li>
            <li className={style.navLink}>
              <a href="#skills">Skills</a>
            </li>
            <li className={style.navLink}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
