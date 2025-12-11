import styles from "./Connecte.module.css"
import Layouts from "../Layout/Layouts"

function Connecte() {
  return (
    <>
    <div className={styles.app} >
      <Layouts/>
    <main className={styles.connect_main}>
        <section className={styles.connect_social}>
          <h2 className={styles.connect_title}>Social Networks</h2>

          <div className={styles.social_list}>
            <a className={styles.social_btn} href="#">
              <span>Whatsapp</span>
              <span className={styles.social_icon}>🟢</span>
            </a>

            <a className={styles.social_btn} href="#">
              <span>GitHub</span>
              <span className={styles.social_icon}>👻</span>
            </a>

            <a className={styles.social_btn} href="#">
              <span>LinkedIn</span>
              <span className={styles.social_icon}>in</span>
            </a>

            <a className={styles.social_btn} href="#">
              <span>Instagram</span>
              <span className={styles.social_icon}>📸</span>
            </a>
          </div>
        </section>

        <section className={styles.connect_form}>
          <h1 className={styles.connect_title}>Call Me</h1>

          <form className={styles.form_card}>
            <div className={styles.row}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`${styles.input} ${styles.half}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`${styles.input} ${styles.half}`}
                
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={`${styles.input} ${styles.half}`}
            />

            <textarea
              name="message"
              placeholder="Message"
              className={`${styles.input} ${styles.textarea}`}
            ></textarea>

            <button type="submit" className={styles.btn_primary}>
              Submit 
            </button>
          </form>
        </section>
      </main>
    </div>
    </>
  )
}

export default Connecte