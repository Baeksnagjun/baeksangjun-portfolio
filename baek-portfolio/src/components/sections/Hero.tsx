import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>{profile.name}</section>;
}
