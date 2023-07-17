import Image from 'next/image';
import Burger from './burger/Burger';
import styles from './Navbar.module.css';
import Navigation from './navigation/Navigation';

const Navbar = () => {
  return (
    <>
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
          <div className={styles.space}></div>
          <div className={styles.rectangel}></div>
          <Burger />
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Navbar;
