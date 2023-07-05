import styles from './Burger.module.css';

const Burger = () => {
  return (
    <div className={styles.burger_menu}>
      <div className={styles.rectangel}></div>
      <div className={styles.rectangel}></div>
      <div className={styles.rectangel}></div>
    </div>
  );
};

export default Burger;
