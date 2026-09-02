import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return <section className={styles.projects} data-count={projects.length} />;
}
