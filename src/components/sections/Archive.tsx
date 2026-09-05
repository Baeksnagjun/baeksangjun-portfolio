import styles from './Archive.module.css';

export default function Archive() {
  type Profile = {
  name: string;
  tagline: string;
  summary: string;
  lastUpdate: string;
  photo: string;
  birthdate: string;
  location: string;
  education: string;
  about: string;
  email: string;
  github: string;
  resumeUrl: string;
  phone:string;
};

const profile: Profile = {
  name: '백상준',
  tagline: '안녕하세요 개발자',
  summary: '백엔드 개발자를 희망하고 있습니다',
  lastUpdate: '2026년',
  photo: '/profilleph.jpeg',
  birthdate: '2000년 2월 10일',
  location: '서울시 서대문구',
  education: '한성대학교 컴퓨터공학과',
  about: '자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다자기소개입니다',
  email: 'juny200@naver.com',
  github: '깃허브@주소',
  resumeUrl: '',
  phone:'010-1234-1234'
};
  return (
    <section id="archive" className={styles.archive} >
    <h2 className={styles.title}>📎Archive</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <p className={styles.category}>GitHub</p>
        <p className={styles.link}>{profile.github}</p>
        <p className={styles.desc}>깃허브저장소</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>Email</p>
        <p className={styles.link}>{profile.email}</p>
        <p className={styles.desc}>이메일</p>
      </div>
      <div className={styles.card}>
        <p className={styles.category}>전화번호</p>
        <p className={styles.link}>{profile.phone}</p>
        <p className={styles.desc}>전화번호</p>
      </div>
    </div>
  </section>
  );
}
