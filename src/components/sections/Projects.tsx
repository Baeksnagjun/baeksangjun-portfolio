
import { useQuery } from '@tanstack/react-query';
import styles from './Projects.module.css';
import { supabase } from '../../shared/api/supabase';

export default function Projects() {
  const { data, isPending, error } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('project')
        .select('*')
        .order('sort');
      if (error) throw error;
      return data;
    },
  })
  if (isPending) return <section id="projects">불러오는 중</section>;
  if (error) return <section id="projects">{error.message}</section>;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>📎Projects</h2>

      <div className={styles.grid}>

        {/* 첫 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={data[0].image} alt={data[0].title} />
          </div>
          <p className={styles.people}>{data[0].people}</p>
          <p className={styles.protitle}>{data[0].title}</p>
          <p className={styles.desc1}>{data[0].description}</p>
          <a
            className={styles.github}
            href={data[0].github}
            target="_blank"
            rel="noreferrer"
          >
            {data[0].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{data[0].stack[0]}</span>
            <span className={styles.stack}>{data[0].stack[1]}</span>
            <span className={styles.stack}>{data[0].stack[2]}</span>
          </div>
        </div>

        {/* 두 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={data[1].image} alt={data[1].title} />
          </div>
          <p className={styles.people}>{data[1].people}</p>
          <p className={styles.protitle}>{data[1].title}</p>
          <p className={styles.desc1}>{data[1].description}</p>
          <a
            className={styles.github}
            href={data[1].github}
            target="_blank"
            rel="noreferrer"
          >
            {data[1].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{data[1].stack[0]}</span>
            <span className={styles.stack}>{data[1].stack[1]}</span>
            <span className={styles.stack}>{data[1].stack[2]}</span>
            <span className={styles.stack}>{data[1].stack[3]}</span>
            <span className={styles.stack}>{data[1].stack[4]}</span>
          </div>
        </div>

        {/* 세 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={data[2].image} alt={data[2].title} />
          </div>
          <p className={styles.people}>{data[2].people}</p>
          <p className={styles.protitle}>{data[2].title}</p>
          <p className={styles.desc1}>{data[2].description}</p>
          <a
            className={styles.github}
            href={data[2].github}
            target="_blank"
            rel="noreferrer"
          >
            {data[2].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{data[2].stack[0]}</span>
            <span className={styles.stack}>{data[2].stack[1]}</span>
            <span className={styles.stack}>{data[2].stack[2]}</span>
            <span className={styles.stack}>{data[2].stack[3]}</span>
          </div>
        </div>

      </div>
    </section>
  )
  //<section className={styles.projects} data-count={projects.length} />;
}
