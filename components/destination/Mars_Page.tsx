import { bellefair, barlowCondensed } from '@/fonts/fonts';
import Image from 'next/image';
import styles from './Destination_Page.module.css';

const MarsPage = () => {
  return (
    <>
      <Image
        src="/destination/desktop.jpg"
        alt="фоновая картинка"
        fill
        priority
        className={styles.desktop_image}
      />
      <Image
        src="/destination/tablet.jpg"
        alt="фоновая картинка"
        fill
        priority
        className={styles.tablet_image}
      />
      <Image
        src="/destination/mobile.jpg"
        alt="фоновая картинка"
        fill
        priority
        className={styles.mobile_image}
      />
      <div className={styles.image}>
        <Image
          src="/destination/image-mars.webp"
          alt="фоновая картинка"
          width={445}
          height={445}
          priority
        />
      </div>
      <div className={`${styles.title} ${bellefair.className}`}>Mars</div>
      <div className={styles.text}>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
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
            225 MIL. km
          </div>
        </div>
        <div className={styles.time}>
          <div className={`${styles.time_title} ${barlowCondensed.className}`}>
            Est. travel time
          </div>
          <div className={`${styles.time_volume} ${bellefair.className}`}>
            9 months
          </div>
        </div>
      </div>
    </>
  );
};

export default MarsPage;
