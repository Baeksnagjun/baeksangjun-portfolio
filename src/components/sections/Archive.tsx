import { useProfile } from '../../shared/hooks/useProfile';
import styles from './Archive.module.css';

export default function Archive() {
 
const {data, isPending, error}=useProfile();
if (isPending) return <section id="about">불러오는 중</section>;
if (error) return <section id="about">불러오기 실패</section>;


  return (
    <section id="archive" className={styles.archive} >
    <h2 className={styles.title}>📎Archive</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <p className={styles.category}>GitHub</p>
        <p className={styles.link}>{data.github}</p>
        <p className={styles.desc}>깃허브저장소</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>Email</p>
        <p className={styles.link}>{data.email}</p>
        <p className={styles.desc}>이메일</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>전화번호</p>
        <p className={styles.link}>{data.phone}</p>
        <p className={styles.dessc}>전화번호</p>
      </div>
    </div>
  </section>
  );
}
