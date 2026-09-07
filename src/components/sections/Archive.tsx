import { useSelector } from 'react-redux';
import { useProfile } from '../../shared/hooks/useProfile';
import styles from './Archive.module.css';
import type { RootState } from '../../shared/store/store';

export default function Archive() {

  const primaryColor = useSelector(
    (state:RootState) => state.theme.primaryColor
  );
  const { data, isPending, error } = useProfile();
  if (isPending) return <section id="about">불러오는 중</section>;
  if (error) return <section id="about">불러오기 실패</section>;


  return (
    <section id="archive" className={styles.archive} >
      <h2 className={styles.title}>📎Archive</h2>
      <div className={styles.cards}>
        <a
          className={styles.card}
          href={data.github}
          target="_blank"
          rel="noreferrer"
        >

          <p className={styles.category}>GitHub</p>
          <p className={styles.link}
          style={{ "--primary-color": primaryColor } as React.CSSProperties}
          >{data.github}</p>
          <p className={styles.desc}>깃허브저장소</p>
        </a>
        <div className={styles.card}>
          <p className={styles.category}>Email</p>
          <p className={styles.link}
          style={{ "--primary-color": primaryColor } as React.CSSProperties}
          >{data.email}</p>
          <p className={styles.desc}>이메일</p>
        </div>
        <div className={styles.card}>
          <p className={styles.category}>전화번호</p>
          <p className={styles.link}
          style={{ "--primary-color": primaryColor } as React.CSSProperties}
          >{data.phone}</p>
          <p className={styles.desc}>전화번호</p>
        </div>
      </div>
    </section>
  );
}
