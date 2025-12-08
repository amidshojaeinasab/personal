import styles from "./Home.module.css"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import img from "../assets/img.png"

function Home() {
  return (
    <>
    <main className={styles.hero}>
        <section className={styles.hero_left}>
          <p className={styles.subtitle}>Hey, I am <span>Amid</span></p>
          <h1 className={styles.title}>Web Developer</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet
            mob.
          </p>

          <div className={styles.cta_row}>
            <button className={styles.btn_primary}>Hire me</button>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.testimonial}>
            <p className={styles.testimonial_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet
              mob. Dolor sit amet, consectetur adipiscing elit sit amet mobi is.
            </p>
            <div className={styles.testimonial_footer}>
              <div className={styles.avatar}>
                <span>C</span>
              </div>
              <div className={styles.person}>
                <span className={styles.person_name}>Carolina Abott</span>
                <span className={styles.person_role}>Business Owner</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.hero_right}>
          <div className={styles.orbit}>
            <div className={`${styles.badge} ${styles.badge_html}`} >
              <img src={html} alt="HTML logo" />
            </div>
            <div className={`${styles.badge} ${styles.badge_css}`}>
              <img src={css} alt="CSS logo" />
            </div>
            <div className={`${styles.badge} ${styles.badge_js}`}>
              <img src={js} alt="JavaScript logo" />
            </div>
            <div className={`${styles.badge} ${styles.badge_react}`}>
              <img src={react} alt="React logo" />
            </div>
          </div>

          <div className={styles.character_wrap}>
            <img
              src={img}
              alt="Developer character"
              className={styles.character_img}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home