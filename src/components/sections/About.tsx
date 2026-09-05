
import { useQuery } from '@tanstack/react-query';
import styles from './About.module.css';
import { supabase } from '../../shared/api/supabase';

export default function About() {
  


const {data, isPending, error}=useQuery({
  queryKey:['profile'],
  queryFn: async ()=>{
    const { data, error}= await supabase.from('profile').select('*').single();
    if (error) throw error;
    return data;
  },
})
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
      <p className={styles.desc}>{data.about}</p>
    </section>
  );
}