import { useState } from 'react';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {

  const [open, setOpen] = useState(false);
  return <div className={styles.wrap}>
    <button
      type="button"
      className={styles.button}
      onClick={()=>setOpen(!open)}>
        <span className={styles.dot}/>
        네이버그린
        <span></span>
      </button>
      {open &&(
        <div className={styles.dropdown}>
          <p className={styles.head}>사이트 테마 색</p>
          <div className={styles.item}>네이버 그린  <span className={styles.dot}/></div>
          <div className={styles.item}>카카오 옐로우  </div>
          <div className={styles.item}>토스 블루  </div>
          <div className={styles.item}>당근 오렌지  </div>
          </div>
      )}
  </div>;
}
