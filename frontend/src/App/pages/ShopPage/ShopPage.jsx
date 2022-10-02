import styles from "./ShopPage.module.scss";
import ShopPageItem from "./ShopPageItem";

const ShopPage = () => {
  return (
    <div className={styles.content}>
      <ShopPageItem />
      <ShopPageItem />
      <ShopPageItem />
      <ShopPageItem />
      <ShopPageItem />
    </div>
  );
};
export default ShopPage;
