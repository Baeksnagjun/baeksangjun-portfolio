import { useQuery } from '@tanstack/react-query';
import styles from './Skills.module.css';
import { supabase } from '../../shared/api/supabase';

export default function Skills() {
 

  const { data, isPending, error } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('sort');
      if (error) throw error;
      return data;
    }
  })
  if (isPending) return <section id="skills">불러오는 중</section>;
  if (error) return <section id="skills">{error.message}</section>;



  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>📎Skills</h2>
      <div className={styles.box}>
        <div className={styles.row}>
          <p className={styles.label}>{data[0].label}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{data[0].items[0]}</span>
            <span className={styles.tag}>{data[0].items[1]}</span>
            <span className={styles.tag}>{data[0].items[2]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{data[1].label}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{data[1].items[0]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{data[2].label}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{data[2].items[0]}</span>
            <span className={styles.tag}>{data[2].items[1]}</span>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>{data[3].label}</p>
          <div className={styles.tags}>
            <span className={styles.tag}>{data[3].items[0]} </span>
            <span className={styles.tag}>{data[3].items[1]} </span>
          </div>
        </div>
      </div>
    </section>
  )
  //<section className={styles.skills} data-count={skills.length} />;
}
