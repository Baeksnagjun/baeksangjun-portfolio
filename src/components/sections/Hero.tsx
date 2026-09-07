import { useSelector } from 'react-redux';
import { useProfile } from '../../shared/hooks/useProfile';
import styles from './Hero.module.css';
import type { RootState } from '../../shared/store/store';


export default function Hero() {

  const primaryColor = useSelector(
    (state:RootState) => state.theme.primaryColor
  );


  const { data, isPending, error } = useProfile();
  if (isPending) return <section id="about">불러오는 중</section>;
  if (error) return <section id="about">불러오기 실패</section>;
  return <section
    id="hero"
    className={styles.hero}
    style={{ "--primary-color": primaryColor } as React.CSSProperties}
  >
    <h2>{data.tagline}</h2>
    <h1>{data.name}</h1>
    <p>{data.summary}</p>
  </section>;
}
