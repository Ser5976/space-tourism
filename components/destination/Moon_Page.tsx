import { bellefair, barlowCondensed } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Destination_Page.module.css';
import Navigation from './navigation/Navigation';

const MoonPage = () => {
  return (
    <div className={styles.main}>
      <CommonTitle />
      <div className={styles.container_content}>
        <div className={styles.space_3}></div>
        <div className={styles.section_1}>
          <div className={styles.image}>
            <Image
              src="/destination/image-moon.webp"
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
          <div className={`${styles.title} ${bellefair.className}`}>Moon</div>
          <div className={styles.text}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
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
                384,400 km
              </div>
            </div>
            <div className={styles.time}>
              <div
                className={`${styles.time_title} ${barlowCondensed.className}`}
              >
                Est. travel time
              </div>
              <div className={`${styles.time_volume} ${bellefair.className}`}>
                3 days
              </div>
            </div>
          </div>
        </div>
        <div className={styles.space_3}></div>
      </div>
    </div>
  );
};

export default MoonPage;
