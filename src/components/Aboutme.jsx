import React from 'react'
import styles from './Aboutme.module.css';
import logoImage from '../assets/amid_logo.png';

function Aboutme() {
  return (
    <div className={styles.aboutmeContainer}>
      <div className={styles.profileSection}>
        <div className={styles.profileCard}>
          <div className={styles.profileImagePlaceholder}>
            <img src={logoImage} alt="amid" className={styles.imageIcon}/>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>عمید شجاعی نسب</h2>
          <p className={styles.profileTitle}>توسعه دهنده فرانت اند</p>
        </div>
      </div>
      <div className={styles.storySection}>
        <h3 className={styles.storyTitle}>
          <span className={styles.titleAccent}></span>
          داستان من
        </h3>
        <div className={styles.storyContent}>
          <p>
            من عاشق برنامه‌نویسی و توسعه وب هستم. از سال ۱۳۹۸ شروع به یادگیری و فعالیت در این زمینه کرده‌ام و همواره به دنبال یادگیری تکنولوژی‌های جدید و پیشرفته بوده‌ام.
          </p>
          <p>
            تخصص اصلی من در توسعه اپلیکیشن‌های وب مدرن و مقیاس‌پذیر است. تا کنون بیش از ۳۰ پروژه مختلف در حوزه‌های تجارت الکترونیک و مدیریت محتوا انجام داده‌ام.
          </p>
          <p>
            من با تیم‌های بین‌المللی همکاری داشته‌ام و همیشه به دنبال بهبود تجربه کاربری و استفاده از جدیدترین تکنولوژی‌ها هستم.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme