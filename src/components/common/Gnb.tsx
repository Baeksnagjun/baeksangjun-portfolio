import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <h2 className={styles.logo}>백상준 포트폴리오</h2>
      <nav className={styles.menu}>
      <h3 className={styles.pageBtn}>About me</h3>
      <h3 className={styles.pageBtn}>Skills</h3>
      <h3 className={styles.pageBtn}>Projects</h3>
      <h3 className={styles.pageBtn}>Career</h3>
      <ThemeSwitcher />
      </nav>
    </header>
  );
}
