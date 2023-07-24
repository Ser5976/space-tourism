'use client';
import { crewLinks } from '@/data/data';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navigation}>
      {crewLinks.map((item) => {
        return (
          <Link
            href={item.href}
            className={cn(styles.wrapper, {
              [styles.wrapper_active]: pathname === item.href,
            })}
            key={item.href}
          ></Link>
        );
      })}
    </div>
  );
};

export default Navigation;
