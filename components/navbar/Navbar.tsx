import Image from 'next/image';
import Burger from './burge_menu/Burger';
import styles from './Navbar.module.css';
import Navigation from './navigation/Navigation';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <Image
              src="/shared/logo.svg"
              width={48}
              height={48}
              alt="логотип"
            />
          </div>
        </div>
        <Burger />
        <div className={styles.rectangel}></div>
        <Navigation />
      </div>
    </header>
  );
};

export default Navbar;
