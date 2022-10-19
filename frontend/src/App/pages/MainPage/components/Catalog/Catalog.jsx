import { Link } from "react-router-dom";

import LinkImg from "./../LinkImg";
import img1 from "./../LinkImg/2.jpg";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      Каталог
      <div className={styles["catalog_items-block"]}>
        <LinkImg title={"Корпусные конфеты"} link="/shop" image={img1} />
        <LinkImg title={"Корпусные конфеты"} link="/shop" image={img1} />
        <LinkImg title={"Корпусные конфеты"} link="/shop" image={img1} />
        {/* <Link className={styles.a} to={"/shop"}>
          <div className={styles.a1}>
            <div className={styles.card}>
              <div className={styles["catalog_text"]}>Корпусные конфеты</div>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129 129"
                enableBackground="new 0 0 129 129"
                fill="white"
                height={25}
                width={25}
              >
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
          </div>
        </Link>
        <Link className={styles.a} to={"/shop"}>
          <div className={styles.a2}>
            <div className={styles.card}>
              <div className={styles["catalog_text"]}>Трюфели</div>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129 129"
                enableBackground="new 0 0 129 129"
                fill="white"
                height={25}
                width={25}
              >
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Catalog;
