import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>📎Projects</h2>

      <div className={styles.grid}>



        <div className={styles.card}>
          <div className={styles.images}>
            <img src="/profilleph.jpeg" alt="나만의 포폴" />
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>나만의 포폴</p>
            <p className={styles.text}>프론트엔드</p>
          </div>
        </div>
      <div className={styles.card}>
          <div className={styles.images}>
            <img src="/profilleph.jpeg" alt="나만의 포폴" />
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>나만의 포폴</p>
            <p className={styles.text}>프론트엔드</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.images}>
            <img src="/profilleph.jpeg" alt="나만의 포폴" />
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>나만의 포폴</p>
            <p className={styles.text}>프론트엔드</p>
          </div>
        </div>





      </div>
    </section>
  )
  //<section className={styles.projects} data-count={projects.length} />;
}
