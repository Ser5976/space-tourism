import { bellefair, barlowCondensed } from '@/fonts/fonts';
import styles from './Home_Page.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <div className={styles.card_left}>
          <div className={`${styles.card_title} ${barlowCondensed.className}`}>
            SO, YOU WANT TO TRAVEL TO
          </div>
          <div className={`${styles.card_subtitle} ${bellefair.className}`}>
            SPACE
          </div>
          <p className={styles.card_description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.space}></div>
        <div className={`${styles.card_right} ${bellefair.className}`}>
          <div className={styles.explore_container}>
            <div className={styles.explore_circle}>
              <div className={styles.explore_title}>EXPLORE</div>
            </div>
          </div>
        </div>
        <div className={styles.space2}></div>
      </div>
    </main>
  );
};

export default HomePage;
