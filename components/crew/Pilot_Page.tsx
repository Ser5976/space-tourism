import { bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Crew_Page.module.css';
import Navigation from './navigation/Navigation';

const Pilot_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space_1}></div>
      <div className={styles.container}>
        <CommonTitle />
        <div className={styles.container_content}>
          <div className={styles.section_1}>
            <div className={`${styles.subtitle} ${bellefair.className}`}>
              Pilot
            </div>
            <div className={`${styles.title} ${bellefair.className}`}>
              Victor Glover
            </div>
            <div className={styles.text}>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </div>
            <Navigation />
          </div>
          <div className={styles.section_3}>
            <div className={styles.rectangel}></div>
          </div>
          <div className={styles.space_2}></div>
          <div className={styles.section_2}>
            <div
              className={`${styles.image} h-[222px] w-[180.726px] 
              min-[470px]:mt-[40px] min-[470px]:w-[433.09px] min-[470px]:h-[532px] 
               xl:w-[554.388px] xl:h-[681px] xl:mt-[-4px]`}
            >
              <Image
                src="/crew/image-victor-glover.webp"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="w-full h-full object-cover object-left  "
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

export default Pilot_Page;
