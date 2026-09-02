import { projects } from '../../data/projects';
import ProjectSideNav from './ProjectSideNav';
import styles from './ProjectModal.module.css';

export default function ProjectModal() {
  return (
    <div className={styles.modal} data-count={projects.length}>
      <ProjectSideNav />
    </div>
  );
}
