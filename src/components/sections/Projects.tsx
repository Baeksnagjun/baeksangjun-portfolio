
import { useQuery } from '@tanstack/react-query';
import styles from './Projects.module.css';
import { supabase } from '../../shared/api/supabase';
import ProjectModal from '../project-modal/ProjectModal';
import { useState } from 'react';

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

  const [selected, setSelected] = useState<any>(null);
  if (isPending) return <section id="projects">불러오는 중</section>;
  if (error) return <section id="projects">{error.message}</section>;


  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>📎Projects</h2>

      <div className={styles.grid}>
        {data.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => setSelected(project)}
          >
            <div className={styles.images}>
              <img src={project.image} alt={project.title} />
            </div>
            <p className={styles.people}>{project.people}</p>
            <p className={styles.protitle}>{project.title}</p>
            <p className={styles.desc1}>{project.description}</p>
            <a
              className={styles.github}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {project.github}
            </a>
            <div className={styles.line} />
            <div className={styles.stacks}>
              {project.stack.map((name: string) => (
                <span key={name} className={styles.stack}>{name}</span>
              ))}

            </div>
          </div>
        ))}
      </div>
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
  //<section className={styles.projects} data-count={projects.length} />;
}
