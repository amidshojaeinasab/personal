import styles from "./Connecte.module.css"

function Connecte() {
  return (
    <>
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
                className={styles.input_half}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_half}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.input}
            />

            <textarea
              name="message"
              placeholder="Message"
              className={styles.input_textarea}
            ></textarea>

            <button type="submit" className={styles.btn_primary}>
              Submit <span style="margin-inline-start: 10px">🚀</span>
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Connecte