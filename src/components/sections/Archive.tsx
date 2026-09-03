import { archives } from '../../data/archives';
import { profile } from '../../data/profile';
import styles from './Archive.module.css';

export default function Archive() {
  return (
    <section id="archive" className={styles.archive} >
    <h2 className={styles.title}>📎Archive</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <p className={styles.category}>GitHub</p>
        <p className={styles.link}>https://github.com/Baeksnagjun</p>
        <p className={styles.desc}>깃허브저장소</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>Email</p>
        <p className={styles.link}>juny200@naver.com</p>
        <p className={styles.desc}>이메일</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>전화번호</p>
        <p className={styles.link}>1010-1234-1234</p>
        <p className={styles.desc}>전화번호</p>
      </div>
    </div>
  </section>
  );
}
