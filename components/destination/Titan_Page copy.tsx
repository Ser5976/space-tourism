import { bellefair, barlowCondensed } from '@/fonts/fonts';
import Image from 'next/image';
import styles from './Destination_Page.module.css';
import Navigation from './navigation/Navigation';

const TitanPage = () => {
  return (
    <div className={styles.container_content}>
      <div className={styles.space_3}></div>
      <div className={styles.section_1}>
        <div className={styles.image}>
          <Image
            src="/destination/image-titan.webp"
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
        <div className={`${styles.title} ${bellefair.className}`}>Titan</div>
        <div className={styles.text}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
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
              1.6 BIL.km
            </div>
          </div>
          <div className={styles.time}>
            <div
              className={`${styles.time_title} ${barlowCondensed.className}`}
            >
              Est. travel time
            </div>
            <div className={`${styles.time_volume} ${bellefair.className}`}>
              7 years
            </div>
          </div>
        </div>
      </div>
      <div className={styles.space_3}></div>
    </div>
  );
};

export default TitanPage;
