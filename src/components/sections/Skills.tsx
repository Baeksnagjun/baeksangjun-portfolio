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
        {data.map((skill)=>(
          <div key={skill.id} className={styles.row}>
          <p className={styles.label}>{skill.label}</p>
          <div className={styles.tags}>
            {skill.items.map((name:string)=>(
              <span className={styles.tag}>{name}</span>
            ))}

          </div>
        </div>
        ))}
      </div>
    </section>
  )
  //<section className={styles.skills} data-count={skills.length} />;
}
