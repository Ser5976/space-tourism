import { bellefair } from '@/fonts/fonts';
import Image from 'next/image';
import CommonTitle from './common_title/CommonTitle';
import styles from './Technology_Page.module.css';
import Navigation from './navigation/Navigation';

const Launch_Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space_1}></div>
      <div className={styles.container}>
        <CommonTitle />
        <div className={styles.container_content}>
          <div className={styles.space_2}></div>
          <div className={styles.section_1}>
            <div className={`${styles.subtitle} ${bellefair.className}`}>
              The Terminology…
            </div>
            <div className={`${styles.title} ${bellefair.className}`}>
              Launch Vehicle
            </div>
            <div className={styles.text}>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </div>
          </div>
          <Navigation />

          <div className={styles.section_2}>
            <div
              className={`${styles.image} h-[170px] w-full min-[470px]:h-[410px] lg:h-[510px] xl:w-[515px] xl:h-[527px]`}
            >
              <Image
                src="/technology/image-launch-landscape.jpg"
                alt="фоновая картинка"
                width={445}
                height={445}
                className="w-full h-full object-cover xl:hidden"
                priority
              />
              <Image
                src="/technology/image-launch-portrait.jpg"
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

export default Launch_Page;
