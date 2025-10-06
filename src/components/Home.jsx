import React from 'react'
import { Button, Flex } from 'antd';
import { ContactsOutlined,LinkedinOutlined,GithubOutlined,InstagramOutlined,WhatsAppOutlined } from '@ant-design/icons';
import styles from './Home.module.css'
import buttonStyles from './MyButton.module.css'

function Home() {
  return (
   <div className={styles.homeContainer}>
     <div className={styles.section}>
        <h2 className={styles.title}>عمید شجاعی نسب</h2>
        <p className={styles.subtitle}>توسعه‌دهنده فول‌استک و متخصص React</p>
        <p className={styles.description}>با ۵ سال تجربه در توسعه وب، متخصص ساخت اپلیکیشن‌های مدرن و کارآمد با استفاده از آخرین تکنولوژی‌ها</p>
     </div>
      <div className={styles.actions}>
        <div className={styles.buttons}>
          <Button type="default" size="large" style={{ fontSize: "20px" }} className={buttonStyles.SkillsBtn}>مشاهده مهارت‌ها</Button>
          <Button type="default" icon={<ContactsOutlined />} size="large" style={{ fontSize: "20px" }} className={buttonStyles.customBtn}>تماس با من</Button>
        </div>
      </div>
     <div className={styles.socials}>
      <Button type="link" className={buttonStyles.socialBtn}><LinkedinOutlined /></Button>

      <Button type="link" className={buttonStyles.socialBtn}><GithubOutlined /></Button>

      <Button type="link" className={buttonStyles.socialBtn}><InstagramOutlined /></Button>

      <Button type="link" className={buttonStyles.socialBtn}><WhatsAppOutlined /></Button>
     </div>
   </div>
  )
}
export default Home
