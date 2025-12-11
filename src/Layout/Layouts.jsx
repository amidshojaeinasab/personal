import { useState } from "react"
import { NavLink} from "react-router-dom"
import styles from "./Layouts.module.css"

function Layouts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
    {/* <div className={styles.app} > */}
      <header className={styles.nav}>
        <div className={styles.logo}>
          <span>Shojaei Nasab</span>
        </div>

        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger_line}></span>
          <span className={styles.hamburger_line}></span>
          <span className={styles.hamburger_line}></span>
        </button>

        <nav className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/Skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/Connecte" onClick={closeMenu}>Connecte</NavLink>
        </nav>

        <div className={`${styles.nav_right} ${isMenuOpen ? styles.nav_right_open : ''}`}>
          <a href="#" className={styles.download_btn} onClick={closeMenu}>
            <span className={styles.icon_circle}>⬇</span>
            <span>Download Resume</span>
          </a>
        </div>
      </header>
    </>
  )
}

export default Layouts