import styles from './About.module.css';
import { useProfile } from '../../shared/hooks/useProfile';

export default function About() {
  


const {data, isPending, error}=useProfile();
if (isPending) return <section id="about">불러오는 중</section>;
if (error) return <section id="about">불러오기 실패</section>;




  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>📎ABOUT ME</h2>

      <div className={styles.grid}>
        <img className={styles.photo} src={data.photo} alt="프로필" />

        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.label}>이름</p>
              <p className={styles.value}>{data.name}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>생년월일</p>
              <p className={styles.value}>{data.birthdate}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>위치</p>
              <p className={styles.value}>{data.location}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.label}>학력</p>
              <p className={styles.value}>{data.education}</p>
            </div>
          </div>

          
        </div>
      </div>
      <p className={styles.desc}>
        트래픽 증가와 비즈니스 변화에 유연하게 대응할 수 있는 확장 가능한 아키텍처 설계에 관심이 많습니다. Spring Framework와 JPA를 기반으로 한 견고한 RESTful API 설계 및 구현에 익숙하며, 쿼리 최적화와 예외 처리를 통해 시스템의 안정성을 높이는 데 집중합니다. 클린 코드를 지향하며, 팀원들과의 원활한 소통을 통해 유지보수하기 좋은 코드를 작성하기 위해 끊임없이 고민합니다.
      </p>
    </section>
  );
}