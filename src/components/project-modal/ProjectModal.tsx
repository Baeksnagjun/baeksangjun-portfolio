import { useEffect } from 'react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }: {
  project: any;
  onClose: () => void;
}) {
  useEffect(()=>{
    document.body.style.overflow='hidden'
    return ()=> {
      document.body.style.overflow = '';
    }
  }, [])
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <img className={styles.thumb} src={project.image} alt={project.title} />
          <div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
        </div>

        
      <div className={styles.body}>
        <p className={styles.desc}>{project.description}</p>
        <img className={styles.modalimg} src={project.modal}/>
      </div>
        

        <a
          className={styles.github}
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub 보러 가기
        </a>
      </div>
    </div>
  );
}