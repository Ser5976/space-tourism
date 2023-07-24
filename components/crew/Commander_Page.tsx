import { bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Crew_Page.module.css';
import Navigation from './navigation/Navigation';

const Commander_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container_content}>
        <div className={styles.space_3}></div>
        <div className={styles.section_1}>
          <CommonTitle />
          <div className={styles.subtitle}>Commander</div>
          <div className={`${styles.title} ${bellefair.className}`}>
            Douglas Hurley
          </div>
          <div className={styles.text}>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </div>
          <Navigation />
        </div>
        <div className={styles.space_2}></div>
        <div className={styles.section_2}>
          <div className={styles.image}>
            <Image
              src="/crew/image-douglas-hurley.webp"
              alt="фоновая картинка"
              width={445}
              height={445}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className={styles.space_3}></div>
      </div>
    </div>
  );
};

export default Commander_Page;
