
import styles from './Career.module.css';

export default function Career() {
  type CareerType = 'intern' | 'hackathon' | 'activity' | 'bootcamp';

  type CareerItem = {
    title: string;
    period: string;
    description: string;
  };

  type Career = {
    type: CareerType;
    name: string;
    logo: string;
    period: string;
    quote: string;
    roles: string[];
    awardScale: string;
    items: CareerItem[];
  };

  const careers: Career[] = [
    {
      type: 'intern',
      name: '현대 오토에버',
      logo: '/logo-autoever.png',
      period: '2026.07.06 ~ 2026.12.28',
      quote: '실무 프로세스를 경험하며 프론트엔드 역량을 키웠습니다.',
      roles: ['프론트엔드 개발'],
      awardScale: '정규직 전환형 인턴',
      items: [
        {
          title: '사내 웹 서비스 UI 개선 및 신규 기능 개발',
          period: '2026.07 - 2026.10',
          description: 'React와 TypeScript를 활용한 사용자 인터페이스 구축 및 컴포넌트 모듈화',
        },
        {
          title: '성능 최적화 및 레거시 코드 리팩토링',
          period: '2026.11 - 2026.12',
          description: '번들 사이즈 최적화 및 불필요한 렌더링 개선으로 로딩 속도 향상',
        },
      ],
    },
    {
      type: 'bootcamp',
      name: '멋쟁이 사자처럼',
      logo: '/logo-likelion.png',
      period: '2025.03.01 ~ 2025.11.30',
      quote: '웹 개발의 기초부터 실무 협업까지 탄탄하게 다진 부트캠프입니다.',
      roles: ['풀스택 개발', '팀장'],
      awardScale: '우수 수료',
      items: [
        {
          title: '팀 프로젝트 총괄 및 프론트엔드 개발',
          period: '2025.08 - 2025.11',
          description: 'React와 Spring Boot 기반의 풀스택 웹 애플리케이션 기획 및 개발 주도',
        },
      ],
    },
    {
      type: 'hackathon',
      name: '교내 캡스톤 디자인 경진대회',
      logo: '/logo-capstone.png',
      period: '2026.04.01 ~ 2026.06.15',
      quote: '실제 상용화를 목표로 한 예약 플랫폼 개발 프로젝트입니다.',
      roles: ['프론트엔드 개발', 'UI/UX 기획'],
      awardScale: '은상 수상',
      items: [
        {
          title: '스터디 카페 및 식당 예약 시스템 구축',
          period: '2026.04 - 2026.06',
          description: '사용자 친화적인 좌석 선택 인터페이스 및 실시간 예약 현황 대시보드 구현',
        },
      ],
    },
  ];

  return (
    <section id="career" className={styles.career} data-count={careers.length}>
      <h2 className={styles.title}>📎Career</h2>

      {/* 첫 번째 커리어 (현대 오토에버) */}
      <div className={styles.cards}>
        <div className={styles.logo}>
          <img src={careers[0].logo} alt={careers[0].name} />
        </div>
        <div className={styles.card}>
          <p className={styles.careername}>{careers[0].name}</p>
          <p className={styles.employment}>{careers[0].period}</p>
          <p className={styles.part}>{careers[0].roles[0]}</p>
          <p className={styles.desc}>{careers[0].quote}</p>
        </div>
      </div>

      {/* 두 번째 커리어 (멋쟁이 사자처럼) */}
      <div className={styles.cards}>
        <div className={styles.logo}>
          <img src={careers[1].logo} alt={careers[1].name} />
        </div>
        <div className={styles.card}>
          <p className={styles.careername}>{careers[1].name}</p>
          <p className={styles.employment}>{careers[1].period}</p>
          <p className={styles.part}>{careers[1].roles[0]}</p>
          <p className={styles.desc}>{careers[1].quote}</p>
        </div>
      </div>

      {/* 세 번째 커리어 (캡스톤 디자인) */}
      <div className={styles.cards}>
        <div className={styles.logo}>
          <img src={careers[2].logo} alt={careers[2].name} />
        </div>
        <div className={styles.card}>
          <p className={styles.careername}>{careers[2].name}</p>
          <p className={styles.employment}>{careers[2].period}</p>
          <p className={styles.part}>{careers[2].roles[0]}</p>
          <p className={styles.desc}>{careers[2].quote}</p>
        </div>
      </div>
    </section>
  )
}
