import { useSelector } from 'react-redux';
import { useProfile } from '../../shared/hooks/useProfile';
import styles from './Hero.module.css';

export default function Hero() {

  const backgroundColor = useSelector(
    (state) => state.theme.backgroundColor
  );

  const { data, isPending, error } = useProfile();
  if (isPending) return <section id="about">불러오는 중</section>;
  if (error) return <section id="about">불러오기 실패</section>;
  return <section
    id="hero"
    className={styles.hero}
    style={{ "--bg-color": backgroundColor } as React.CSSProperties}
  >
    <h2>{data.tagline}</h2>
    <h1>{data.name}</h1>
    <p>{data.summary}</p>
  </section>;
}
