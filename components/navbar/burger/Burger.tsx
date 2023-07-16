'use client';
import { Context } from '@/context/GlobalContext';
import cn from 'classnames';
import { useContext } from 'react';
import styles from './Burger.module.css';

const Burger = () => {
  const { close, setClose } = useContext(Context);
  return (
    <div
      className={cn({
        [styles.burger]: close,
        [styles.invisible]: !close,
      })}
      onClick={() => setClose(false)}
    >
      <div className={styles.rectangel}></div>
      <div className={styles.rectangel}></div>
      <div className={styles.rectangel}></div>
    </div>
  );
};

export default Burger;
