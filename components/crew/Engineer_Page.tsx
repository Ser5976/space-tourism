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
              Flight Engineer
            </div>
            <div className={`${styles.title} ${bellefair.className}`}>
              Anousheh Ansari
            </div>
            <div className={styles.text}>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </div>
            <Navigation />
          </div>
          <div className={styles.section_3}>
            <div className={styles.rectangel}></div>
          </div>
          <div className={styles.space_2}></div>
          <div className={styles.section_2}>
            <div
              className={`${styles.image} h-[223px] w-[226.147px] 
              min-[470px]:mt-[40px] min-[470px]:w-[539.508px]  min-[470px]:h-[532px] 
              xl:h-[607px] xl:w-[539.5px] xl:mt-[70px]`}
            >
              <Image
                src="/crew/image-anousheh-ansari.webp"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="w-full h-full object-cover object-top"
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
