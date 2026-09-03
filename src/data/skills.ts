export type SkillLevel = 1 | 2 | 3;

export type SkillItem = {
  name: string;
  reason: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: 'Languages' | 'Framework & Libraries' | 'Database' | 'Tools';
  label: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    id: 'Languages',
    label: 'Languages',
    items: [
      { name: 'TypeScript', reason: '프로젝트 타입 안정성', level: 3 },
      { name: 'JavaScript', reason: '웹 기본 언어', level: 3 },
      { name: 'Java', reason: '백엔드 학습', level: 2 },
    ],
  },
  {
    id: 'Framework & Libraries',
    label: 'Framework & Libraries',
    items: [
      { name: 'React', reason: '포트폴리오 프론트', level: 2 },
      { name: 'Spring Boot', reason: 'REST API 구현', level: 2 },
      { name: 'Node.js', reason: '서버 기초', level: 1 },
    ],
  },
  {
    id: 'Database',
    label: 'Database',
    items: [
      { name: 'MySQL', reason: '관계형 DB 사용', level: 2 },
      { name: 'PostgreSQL', reason: '스키마 설계 경험', level: 1 },
      { name: 'Redis', reason: '캐시 학습', level: 1 },
    ],
  },
  {
    id: 'Tools',
    label: 'Tools',
    items: [
      { name: 'Git', reason: '버전 관리', level: 3 },
      { name: 'GitHub', reason: '협업 · 배포', level: 2 },
      { name: 'Docker', reason: '로컬 환경 구성', level: 1 },
    ],
  },
];
