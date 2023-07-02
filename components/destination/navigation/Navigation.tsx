'use client';
import { destinationLinks } from '@/data/data';
import { barlowCondensed } from '@/fonts/fonts';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <div className={styles.navigation}>
      {destinationLinks.map((item) => {
        return (
          <Link
            href={item.href}
            className={cn(styles.wrapper, barlowCondensed.className, {
              [styles.wrapper_active]: pathname === item.href,
            })}
            key={item.href}
          >
            {item.link}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
