import { Link } from "react-router-dom";
import logo from '/public/img/logo.png';
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobile) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY, isMobile]);

  const handleClick = () => {

    setIsOpen(!isOpen);
  }


  return (
    <nav
        className={`${styles.customNavbar} navbar navbar-expand-lg bg-light`}
        style={{transform: isVisible ? "translateY(0)" : "translateY(-100%)"}}>
      <div className={`${styles.navBackgroundColor} container-fluid`}>
        <Link className="navbar-brand" to="/">
          <img id={`${styles.logoNav}`} src={logo} alt="logo" />
        </Link>
        <button
          className={`navbar-toggler ${styles.navbarToggler} ${styles.hamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.navTogglerIcon}`}>
            <div  className={`${styles.hamburgerDiv} ${isOpen ? styles.active : ""}`}
                  onClick={handleClick}>
              <span className={`${styles.hamburgerTopLine}`}></span>
              <span className={`${styles.hamburgerCenterLine}`}></span>
              <span className={`${styles.hamburgerBottomLine}`}></span>
            </div>
            {/*<img className={`${styles.hamburgerIcon}`} src={menuIcon} alt="menu"></img>*/}
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className={`${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} to="/">Home</Link>
            </li>
            <li className={`${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="/services">Servizi</a>
            </li>
            <li className={`${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} to="/chi-siamo">Chi siamo</Link>
            </li>
            <li className={`${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="/#contact-form">Contattaci</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;