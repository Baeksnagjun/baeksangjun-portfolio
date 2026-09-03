import { profile } from '../../data/profile';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>📎ABOUT ME</h2>

      <div className={styles.grid}>
        <img className={styles.photo} src={profile.photo} alt="프로필" />

        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.label}>이름</p>
              <p className={styles.value}>{profile.name}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>생년월일</p>
              <p className={styles.value}>{profile.birthdate}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>위치</p>
              <p className={styles.value}>{profile.location}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>학력</p>
              <p className={styles.value}>{profile.education}</p>
            </div>
          </div>

          
        </div>
      </div>
      <p className={styles.desc}>{profile.about}</p>
    </section>
  );
}