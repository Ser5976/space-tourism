import { barlowCondensed, bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Technology_Page.module.css';
import Navigation from './navigation/Navigation';

const Capsule_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space_1}></div>
      <div className={styles.container}>
        <CommonTitle />
        <div className={styles.container_content}>
          <div className={styles.space_2}></div>
          <div className={styles.section_1}>
            <div className={`${styles.subtitle} ${barlowCondensed.className}`}>
              The Terminology…
            </div>
            <div className={`${styles.title} ${bellefair.className}`}>
              SPACE CAPSULE
            </div>
            <div className={styles.text}>
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </div>
          </div>
          <Navigation />

          <div className={styles.section_2}>
            <div
              className={`${styles.image} h-[170px] w-full min-[470px]:h-[410px] lg:h-[510px] xl:w-[515px] xl:h-[527px]`}
            >
              <Image
                src="/technology/image-capsule-landscape.jpg"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="w-full h-full object-cover xl:hidden"
                priority
              />
              <Image
                src="/technology/image-capsule-portrait.jpg"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="hidden xl:block xl:w-full xl:h-full xl:object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsule_Page;
