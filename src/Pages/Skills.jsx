import styles from "./Skills.module.css"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import wordpress from "../assets/wordpress.svg"

function Skills() {
  return (
    <>
    <main className={styles.skills_main}>
        <section className={styles.skills_text}>
          <h1 className={styles.skills_title}>My Skills</h1>
          <p className={styles.skills_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>

          <button className={styles.skills_cta}>contact me</button>
        </section>

        <section className={styles.skills_orbit_section}>
          <div className={styles.skills_orbit_card}>
            <div className={styles.skills_orbit_glow}></div>

          
            <div className={`${styles.skills_orbit_ring} ${styles.skills_orbit_ring_outer}`}></div>

           
            <div className={`${styles.skills_orbit_badge} ${styles.skills_orbit_badge_html}`}>
              <img src={html} alt="HTML" />
            </div>
            <div className={`${styles.skills_orbit_badge} ${styles.skills_orbit_badge_css}`}>
              <img src={css} alt="CSS" />
            </div>
            <div className={`${styles.skills_orbit_badge} ${styles.skills_orbit_badge_js}`}>
              <img src={js} alt="JavaScript" />
            </div>
            <div className={`${styles.skills_orbit_badge} ${styles.skills_orbit_badge_react}`}>
              <img src={wordpress} alt="wordpress" />
            </div>
            <div className={`${styles.skills_orbit_badge} ${styles.skills_orbit_badge_react_center}`}>
              <img src={react} alt="React" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Skills