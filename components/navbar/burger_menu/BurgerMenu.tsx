'use client';
import cn from 'classnames';
import styles from './BurgerMenu.module.css';
import { headerLinks } from '../../../data/data';
import { barlowCondensed } from '@/fonts/fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useContext } from 'react';

import { Context } from '@/context/GlobalContext';

const BurgerMenu = () => {
  const pathname = usePathname();
  const { close, setClose } = useContext(Context);
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.close]: close,
      })}
    >
      <div className={styles.pad} />
      <div className={styles.cross} onClick={() => setClose(true)}>
        <div className={styles.cross_1} />
        <div className={styles.cross_2} />
      </div>
      <div className={styles.menu}>
        {headerLinks.map((item) => {
          return (
            <div
              key={item.link}
              className={cn(styles.link, barlowCondensed.className, {
                [styles.link_active]:
                  `/${pathname.split('/')[1]}` === item.href,
                // т.к. у нас есть подменю на странице, в url нам  нужна первая часть адреса
              })}
            >
              <div className={styles.link_number}>{item.number}</div>
              <Link
                href={item.href}
                className={styles.link_title}
                onClick={() => setClose(true)}
              >
                {item.link}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BurgerMenu;
