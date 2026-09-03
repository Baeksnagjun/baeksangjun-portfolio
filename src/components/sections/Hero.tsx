import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return <section id="hero" className={styles.hero}>
    <h2>{profile.tagline}</h2>
    <h1>{profile.name}</h1>
    <p>{profile.summary}</p>
    </section>;
}
