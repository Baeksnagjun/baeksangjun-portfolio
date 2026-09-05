import styles from './Skills.module.css';

export default function Skills() {
  type SkillCategory = {
  id: 'Languages' | 'Frontend' | 'Backend' | 'Tools';
  label: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    id: 'Languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java'],
  },
  {
    id: 'Frontend',
    label: 'Frontend',
    items: ['React'],
  },
  {
    id: 'Backend',
    label: 'Backend',
    items: ['Spring Boot', 'Node.js', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'Tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

  
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>📎Skills</h2>
      <div className={styles.box}>
        <div className={styles.row}>
          <p className={styles.label}>{skills[0].id}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{skills[0].items[0]}</span>
            <span className={styles.tag}>{skills[0].items[1]}</span>
            <span className={styles.tag}>{skills[0].items[2]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{skills[1].id}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{skills[1].items[0]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{skills[2].id}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{skills[2].items[0]}</span>
            <span className={styles.tag}>{skills[2].items[1]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{skills[3].id}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{skills[3].items[0]} </span>
            <span className={styles.tag}>{skills[3].items[1]} </span>
          </div>
        </div>
      </div>
    </section>
  )
  //<section className={styles.skills} data-count={skills.length} />;
}
