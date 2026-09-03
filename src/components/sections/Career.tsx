import { careers } from '../../data/careers';
import styles from './Career.module.css';

export default function Career() {
  return <section id="career" className={styles.career} data-count={careers.length} >
    <h2 className={styles.title}>📎Career</h2>
    <div className={styles.cards}>
      <div className={styles.logo}></div>
      <div className={styles.card}>
        <p className={styles.careername}>현대 오토에버</p>
        <p className={styles.employment}>2026.07.06 ~ 2026.12.28</p>
        <p className={styles.part}>프론트엔드 개발</p>
        <p className={styles.part}>프론트엔드 개발</p>
      </div>
    </div>
  </section>;
}
