import { bellefair, barlowCondensed } from '@/app/fonts';
import Image from 'next/image';
import styles from './Home_Page.module.css';

const HomePage = () => {
  return (
    <>
      <Image
        src="/home/desktop.jpg"
        alt="фоновая картинка"
        fill
        className={styles.desktop_image}
      />
      <Image
        src="/home/tablet.jpg"
        alt="фоновая картинка"
        fill
        className={styles.tablet_image}
      />
      <Image
        src="/home/mobile.jpg"
        alt="фоновая картинка"
        fill
        className={styles.mobile_image}
      />
      <div className="">
        <div className={styles.space}>
          <div className={`${styles.space_title} ${barlowCondensed.className}`}>
            So, you want to travel to
          </div>
          <div className={`${styles.space_subtitle} ${bellefair.className}`}>
            Space
          </div>
          <p className={styles.space_text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className={`${styles.explore} ${bellefair.className}`}>
        <div className={styles.explore_text}>Explore</div>
      </div>
    </>
  );
};

export default HomePage;
