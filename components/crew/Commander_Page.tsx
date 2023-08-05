import { bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Crew_Page.module.css';
import Navigation from './navigation/Navigation';

const Commander_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space_1}></div>
      <div className={styles.container}>
        <CommonTitle />
        <div className={styles.container_content}>
          <div className={styles.section_1}>
            <div className={`${styles.subtitle} ${bellefair.className}`}>
              Commander
            </div>
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
          <div className={styles.section_3}>
            <div className={styles.rectangel}></div>
          </div>
          <div className={styles.space_2}></div>
          <div className={styles.section_2}>
            <div
              className={`${styles.image} h-[222px] w-[177.123px] 
              min-[470px]:mt-[27px] min-[470px]:h-[572px] min-[470px]:w-[456.372px] 
              xl:h-[723px] xl:w-[568.072px] xl:mt-[-46px] `}
            >
              <Image
                src="/crew/image-douglas-hurley.webp"
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

export default Commander_Page;
