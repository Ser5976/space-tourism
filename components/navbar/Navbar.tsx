import Image from 'next/image';
import styles from './Navbar.module.css';
import Navigation from './navigation/Navigation';

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/shared/logo.svg" fill alt="логотип" />
        </div>
        <div className={styles.rectangel}></div>
        <Navigation />
      </header>
      <div className={styles.burgeger_menu}>
        <div className={styles.rectangel_1}></div>
        <div className={styles.rectangel_2}></div>
        <div className={styles.rectangel_2}></div>
      </div>
    </>
  );
};

export default Navbar;
