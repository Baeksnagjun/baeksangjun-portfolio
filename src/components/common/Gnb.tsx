import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <a href="#hero" className={styles.logo}>백상준 포트폴리오</a>
      <nav className={styles.menu}>
        <a href="#about" className={styles.pageBtn}>About me</a>
        <a href="#skills" className={styles.pageBtn}>Skills</a>
        <a href="#projects" className={styles.pageBtn}>Projects</a>
        <a href="#career" className={styles.pageBtn}>Career</a>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
