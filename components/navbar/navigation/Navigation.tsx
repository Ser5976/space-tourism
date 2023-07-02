'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Navigation.module.css';
import { barlowCondensed } from '../../../fonts/fonts';
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
              key={item.link}
              className={cn(styles.wrapper, barlowCondensed.className, {
                [styles.wrapper_active]:
                  `/${pathname.split('/')[1]}` === item.href,
                // т.к. у нас есть подменю на странице, в url нам  нужна первая часть адреса
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
