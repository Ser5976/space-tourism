import { bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Crew_Page.module.css';
import Navigation from './navigation/Navigation';

const Specialist_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space_1}></div>
      <div className={styles.container}>
        <CommonTitle />
        <div className={styles.container_content}>
          <div className={styles.section_1}>
            <div className={`${styles.subtitle} ${bellefair.className}`}>
              Mission Specialist
            </div>
            <div className={`${styles.title} ${bellefair.className}`}>
              Mark Shuttleworth
            </div>
            <div className={styles.text}>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </div>
            <Navigation />
          </div>
          <div className={styles.section_3}>
            <div className={styles.rectangel}></div>
          </div>
          <div className={styles.space_2}></div>
          <div className={styles.section_2}>
            <div className={styles.image}>
              <Image
                src="/crew/image-mark-shuttleworth.webp"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.space_1}></div>
    </div>
  );
};

export default Specialist_Page;
