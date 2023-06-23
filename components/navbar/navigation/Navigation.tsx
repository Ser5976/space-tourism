'use client';
import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import styles from './Navigation.module.css';
import { barlowCondensed } from '../../../data/fonts/fonts';
import { headerLinks } from '../../../data/data';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_links}>
        {headerLinks.map((item) => {
          return (
            <div
              className={cn(styles.wrapper, barlowCondensed.className, {
                [styles.wrapper_active]: pathname === item.href,
              })}
            >
              <div className={styles.wrapper_number}>{item.number}</div>
              <Link href={item.href} className={styles.wrapper_link}>
                {item.link}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
