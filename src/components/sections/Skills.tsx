import { skills } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>📎Skills</h2>

      <div className={styles.grid}>


          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.label}>Languages</p>
              <p className={styles.value}></p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>Framework & Libraries</p>
              <p className={styles.value}></p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>Tools</p>
              <p className={styles.value}></p>
            </div>
            


          
        </div>
      </div>
    </section>
  )
  //<section className={styles.skills} data-count={skills.length} />;
}
