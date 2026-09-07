import { useState } from 'react';
import styles from './ThemeSwitcher.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../shared/store/store';
import { setBackgroundColor } from '../../shared/store/themeSlice';


const themes = [
  { name: '네이버 그린', color: '#03c75a' },
  { name: '카카오 옐로우', color: '#fee500' },
  { name: '토스 블루', color: '#3182f6' },
  { name: '당근 오렌지', color: '#ff6f0f' },
];
export default function ThemeSwitcher() {

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const backgroundColor = useSelector(
    (state: RootState) => state.theme.backgroundColor
  )
  const current = themes.find((item) => item.color === backgroundColor) ?? themes[0];
  return <div className={styles.wrap}>
    <button
      type="button"
      className={styles.button}
      onClick={() => setOpen(!open)}>
      <span className={styles.dot}
        style={{ background: current.color }}
      />
      {current.name}
      <span></span>
    </button>
    {open && (
      <div className={styles.dropdown}>
        <p className={styles.head}>사이트 테마 색</p>
        {themes.map((item) => (
          <button
            type="button"
            key={item.name}
            className={styles.item}
            onClick={() => {
              dispatch(setBackgroundColor(item.color));
              setOpen(false);
            }}
          >
            {item.name}
            <span className={styles.dot} style={{ background: item.color }} />
          </button>
        ))}
      </div>
    )}
  </div>;
}
