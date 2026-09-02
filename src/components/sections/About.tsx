import { profile } from '../../data/profile';
import styles from './About.module.css';

export default function About() {
  return <section className={styles.about}>{profile.about}</section>;
}
