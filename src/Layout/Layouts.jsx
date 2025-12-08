import styles from "./Layouts.module.css"

function Layouts({children}) {
  return (
    <>
    <div className={styles.app} >
      <header className={styles.nav}>
        <div className={styles.logo}>
          <span>Shojaei Nasab</span>
        </div>

        <nav className={styles.menu}>
          <a href="index.html" className={styles.active}>Home</a>
          <a href="skills.html">Skills</a>
          <a href="Connect.html">Connect</a>
        </nav>

        <div className={styles.nav_right}>
          <a href="#" className={styles.download_btn}>
            <span className={styles.icon_circle}>⬇</span>
            <span>Download Resume</span>
          </a>
        </div>
      </header>
    
    {children}

    </div>
    </>
  )
}

export default Layouts