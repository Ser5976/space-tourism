import styles from './CommonTitle.module.css';
import { barlowCondensed } from '@/fonts/fonts';

const CommonTitle = (): JSX.Element => {
  return (
    <div className={styles.common_title}>
      <div className={`${styles.container} ${barlowCondensed.className}`}>
        <div className={styles.number}>02</div>
        <div>Meet your crew</div>
      </div>
    </div>
  );
};

export default CommonTitle;
