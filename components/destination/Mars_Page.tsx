import { bellefair, barlowCondensed } from '@/fonts/fonts';
import Image from 'next/image';
import styles from './Destination_Page.module.css';
import Navigation from './navigation/Navigation';
import CommonTitle from './common_title/CommonTitle';

const MarsPage = () => {
  return (
    <div className={styles.main}>
      <CommonTitle />
      <div className={styles.container_content}>
        <div className={styles.space_3}></div>
        <div className={styles.section_1}>
          <div className={styles.image}>
            <Image
              src="/destination/image-mars.webp"
              alt="фоновая картинка"
              width={445}
              height={445}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className={styles.space_2}></div>
        <div className={styles.section_2}>
          <Navigation />
          <div className={`${styles.title} ${bellefair.className}`}>Mars</div>
          <div className={styles.text}>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </div>
          <div className={styles.rectangel}></div>
          <div className={styles.footer}>
            <div className={styles.distance}>
              <div
                className={`${styles.distance_title} ${barlowCondensed.className}`}
              >
                AVG. DISTANCE
              </div>
              <div
                className={`${styles.distance_volume} ${bellefair.className}`}
              >
                225 MIL.km
              </div>
            </div>
            <div className={styles.time}>
              <div
                className={`${styles.time_title} ${barlowCondensed.className}`}
              >
                Est. travel time
              </div>
              <div className={`${styles.time_volume} ${bellefair.className}`}>
                9 months
              </div>
            </div>
          </div>
        </div>
        <div className={styles.space_3}></div>
      </div>
    </div>
  );
};

export default MarsPage;
