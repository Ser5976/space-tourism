import { bellefair, barlowCondensed } from '@/fonts/fonts';
import Image from 'next/image';
import styles from './Destination_Page.module.css';
import Navigation from './navigation/Navigation';

const EuropaPage = () => {
  return (
    <div className={styles.container_content}>
      <div className={styles.space_3}></div>
      <div className={styles.section_1}>
        <div className={styles.image}>
          <Image
            src="/destination/image-europa.webp"
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
        <div className={`${styles.title} ${bellefair.className}`}>Europa</div>
        <div className={styles.text}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </div>
        <div className={styles.rectangel}></div>
        <div className={styles.footer}>
          <div className={styles.distance}>
            <div
              className={`${styles.distance_title} ${barlowCondensed.className}`}
            >
              AVG. DISTANCE
            </div>
            <div className={`${styles.distance_volume} ${bellefair.className}`}>
              628 MIL.km
            </div>
          </div>
          <div className={styles.time}>
            <div
              className={`${styles.time_title} ${barlowCondensed.className}`}
            >
              Est. travel time
            </div>
            <div className={`${styles.time_volume} ${bellefair.className}`}>
              3 year
            </div>
          </div>
        </div>
      </div>
      <div className={styles.space_3}></div>
    </div>
  );
};

export default EuropaPage;
