import { FC } from 'react';
import styles from './CommonTitle.module.css';
import { ICommonTitle } from '@/types/types';
import { barlowCondensed } from '@/fonts/fonts';

const CommonTitle: FC<ICommonTitle> = ({ number }): JSX.Element => {
  return (
    <div className={`${styles.container} ${barlowCondensed.className}`}>
      <div className={styles.number}>{number}</div>
      <div>Pick your destination</div>
    </div>
  );
};

export default CommonTitle;
