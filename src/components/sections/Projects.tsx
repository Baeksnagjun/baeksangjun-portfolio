
import styles from './Projects.module.css';

export default function Projects() {
  type Project = {
    image: string;
    people: string;
    title: string;
    description: string;
    github: string;
    stack: string[];
  };

  const projects: Project[] = [
    {
      image: '/profilleph.jpeg',
      people: '1인 프로젝트',
      title: '나만의 포폴',
      description: '포트폴리오 웹사이트를 직접 기획하고 구현한 프로젝트입니다.',
      github: 'https://github.com/Baeksnagjun/baeksangjun-portfolio',
      stack: ['React', 'TypeScript', 'Vite'],
    },
    {
      image: '/project-capstone.jpeg',
      people: '4인 팀 프로젝트',
      title: '스마트 예약 플랫폼 (Capstone)',
      description: '레스토랑과 스터디 카페를 실시간으로 예약하고 좌석을 선택할 수 있는 통합 웹 서비스입니다.',
      github: 'https://github.com/Baeksnagjun/capstone-reservation',
      stack: ['Spring Boot', 'JPA', 'MySQL', 'React', 'TypeScript'],
    },
    {
      image: '/project-security.jpeg',
      people: '2인 팀 프로젝트',
      title: '사이버 보안 분석 툴',
      description: '로그 데이터와 네트워크 트래픽을 분석하여 잠재적 위협 요소를 탐지하고 시각화하는 대시보드입니다.',
      github: 'https://github.com/Baeksnagjun/cyber-security-tool',
      stack: ['Python', 'FastAPI', 'React', 'TailwindCSS'],
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>📎Projects</h2>

      <div className={styles.grid}>

        {/* 첫 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={projects[0].image} alt={projects[0].title} />
          </div>
          <p className={styles.people}>{projects[0].people}</p>
          <p className={styles.protitle}>{projects[0].title}</p>
          <p className={styles.desc1}>{projects[0].description}</p>
          <a
            className={styles.github}
            href={projects[0].github}
            target="_blank"
            rel="noreferrer"
          >
            {projects[0].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{projects[0].stack[0]}</span>
            <span className={styles.stack}>{projects[0].stack[1]}</span>
            <span className={styles.stack}>{projects[0].stack[2]}</span>
          </div>
        </div>

        {/* 두 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={projects[1].image} alt={projects[1].title} />
          </div>
          <p className={styles.people}>{projects[1].people}</p>
          <p className={styles.protitle}>{projects[1].title}</p>
          <p className={styles.desc1}>{projects[1].description}</p>
          <a
            className={styles.github}
            href={projects[1].github}
            target="_blank"
            rel="noreferrer"
          >
            {projects[1].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{projects[1].stack[0]}</span>
            <span className={styles.stack}>{projects[1].stack[1]}</span>
            <span className={styles.stack}>{projects[1].stack[2]}</span>
            <span className={styles.stack}>{projects[1].stack[3]}</span>
            <span className={styles.stack}>{projects[1].stack[4]}</span>
          </div>
        </div>

        {/* 세 번째 프로젝트 */}
        <div className={styles.card}>
          <div className={styles.images}>
            <img src={projects[2].image} alt={projects[2].title} />
          </div>
          <p className={styles.people}>{projects[2].people}</p>
          <p className={styles.protitle}>{projects[2].title}</p>
          <p className={styles.desc1}>{projects[2].description}</p>
          <a
            className={styles.github}
            href={projects[2].github}
            target="_blank"
            rel="noreferrer"
          >
            {projects[2].github}
          </a>
          <div className={styles.line} />
          <div className={styles.stacks}>
            <span className={styles.stack}>{projects[2].stack[0]}</span>
            <span className={styles.stack}>{projects[2].stack[1]}</span>
            <span className={styles.stack}>{projects[2].stack[2]}</span>
            <span className={styles.stack}>{projects[2].stack[3]}</span>
          </div>
        </div>

      </div>
    </section>
  )
  //<section className={styles.projects} data-count={projects.length} />;
}
