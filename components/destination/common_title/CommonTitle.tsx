import styles from './CommonTitle.module.css';
import { barlowCondensed } from '@/fonts/fonts';

const CommonTitle = (): JSX.Element => {
  return (
    <div className={styles.common_title}>
      <div className={styles.space_1}></div>
      <div className={`${styles.container} ${barlowCondensed.className}`}>
        <div className={styles.number}>01</div>
        <div>Pick your destination</div>
      </div>
      <div className={styles.space_2}></div>
    </div>
  );
};

export default CommonTitle;
