
import { useQuery } from '@tanstack/react-query';
import styles from './Career.module.css';
import { supabase } from '../../shared/api/supabase';

export default function Career() {
  

  const { data, isPending, error } = useQuery({
    queryKey: ['career'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('career')
        .select('*')
        .order('sort');
      if (error) throw error;
      return data;
    }
  })
  if (isPending) return <section id="career">불러오는 중</section>;
  if (error) return <section id="career">{error.message}</section>;
  

  return (
    <section id="career" className={styles.career}>
      <h2 className={styles.title}>📎Career</h2>

      {data.map((career)=>(
        <div key={career.id} className={styles.cards}>
        <div className={styles.logo}>
          <img src={career.logo} alt={career.name} />
        </div>
        <div className={styles.card}>
          <p className={styles.careername}>{career.name}</p>
          <p className={styles.employment}>{career.period}</p>
          <p className={styles.part}>{career.roles.join(' . ')}</p>
          <p className={styles.desc}>{career.quote}</p>
        </div>
      </div>
      ))}
      
    </section>
  )
}
