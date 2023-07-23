import { bellefair, barlowCondensed } from '@/fonts/fonts';
import styles from './Home_Page.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <div className={styles.space_1}></div>
        <div className={styles.section_1}>
          <div className={`${styles.title} ${barlowCondensed.className}`}>
            SO, YOU WANT TO TRAVEL TO
          </div>
          <div className={`${styles.subtitle} ${bellefair.className}`}>
            SPACE
          </div>
          <p className={styles.description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.space_2}></div>
        <div className={`${styles.section_2} ${bellefair.className}`}>
          <div className={styles.explore_container}>
            <div className={styles.explore_circle}>
              <div className={styles.explore_title}>EXPLORE</div>
            </div>
          </div>
        </div>
        <div className={styles.space_3}></div>
      </div>
    </main>
  );
};

export default HomePage;
