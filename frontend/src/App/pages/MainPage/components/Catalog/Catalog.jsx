import img1 from "@assets/shopItemImages/4.jpeg";
import { Link } from "react-router-dom";

import LinkImg from "./../LinkImg";
import img2 from "./../LinkImg/2.jpg";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      Каталог
      <div className={styles["catalog_items-block"]}>
        <LinkImg title={"Корпусные конфеты"} link="/shop" image={img1} />
        <LinkImg title={"Трюфели"} link="/shop" image={img2} />
      </div>
    </div>
  );
};

export default Catalog;
