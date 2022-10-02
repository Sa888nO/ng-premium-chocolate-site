import styles from "./ShopPageItem.module.scss";

const ShopPageItem = () => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src="/shopItemImages/3.jpg" alt="candy" />
      <div className={styles["info-block"]}>
        <div className={styles.title}>Апельсин</div>

        <button className={styles.button}>Выбрать вкус</button>
      </div>
    </div>
  );
};

export default ShopPageItem;
