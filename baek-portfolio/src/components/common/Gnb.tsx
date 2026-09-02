import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

export default function Gnb() {
  return (
    <header className={styles.gnb}>
      <ThemeSwitcher />
    </header>
  );
}
