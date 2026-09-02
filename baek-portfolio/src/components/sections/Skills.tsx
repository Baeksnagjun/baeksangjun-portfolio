import { skills } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return <section className={styles.skills} data-count={skills.length} />;
}
