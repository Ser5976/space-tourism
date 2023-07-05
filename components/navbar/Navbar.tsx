import Image from 'next/image';
import Burger from './burge_menu/Burger';
import styles from './Navbar.module.css';
import Navigation from './navigation/Navigation';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/shared/logo.svg" width={48} height={48} alt="логотип" />
      </div>
      <Navigation />
      <Burger />
    </header>
  );
};

export default Navbar;
