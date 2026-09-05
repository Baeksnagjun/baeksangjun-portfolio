
import styles from './About.module.css';

export default function About() {
  
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
};

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>📎ABOUT ME</h2>

      <div className={styles.grid}>
        <img className={styles.photo} src={profile.photo} alt="프로필" />

        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.label}>이름</p>
              <p className={styles.value}>{profile.name}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>생년월일</p>
              <p className={styles.value}>{profile.birthdate}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>위치</p>
              <p className={styles.value}>{profile.location}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>학력</p>
              <p className={styles.value}>{profile.education}</p>
            </div>
          </div>

          
        </div>
      </div>
      <p className={styles.desc}>{profile.about}</p>
    </section>
  );
}