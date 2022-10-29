import LinkImg from "./../LinkImg";
import img1 from "./1.jpeg";
import img2 from "./2.jpg";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      Каталог
      <div className={styles["catalog_items-block"]}>
        <LinkImg title={"Корпусные конфеты"} link="/shop/2" image={img1} />
        <LinkImg title={"Трюфели"} link="/shop/3" image={img2} />
      </div>
    </div>
  );
};

export default Catalog;
