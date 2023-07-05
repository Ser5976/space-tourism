import { bellefair, barlowCondensed } from '@/fonts/fonts';
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
    </>
  );
};

export default HomePage;
