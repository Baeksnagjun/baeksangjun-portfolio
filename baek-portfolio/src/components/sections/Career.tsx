import { careers } from '../../data/careers';
import styles from './Career.module.css';

export default function Career() {
  return <section className={styles.career} data-count={careers.length} />;
}
