import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./LogoBlock.module.scss";
const LogoBlock = () => {
  return (
    <div className={classNames(styles["logo-block"])}>
      <div className={classNames(styles["logo-block_img"])}></div>
      <div className={classNames(styles["logo-block_text-block"])}>
        <div className={styles.block}>
          <div className={classNames(styles["logo-block_main-text"])}>
            Идеальный подарок без повода
          </div>
          <div
            className={classNames(
              styles["logo-block_main-text"],
              styles["logo-block_sub-text"]
            )}
          >
            Авторские конфеты ручной работы, выполненные из лучших ингредиентов,
            точно придутся по вкусу и запомнятся надолго
          </div>
        </div>
        <div
          className={classNames(
            styles["logo-block_main-text"],
            styles["logo-block_links-block"]
          )}
        >
          <Link className={styles.link1} to={"/shop/1"}>
            Каталог
          </Link>
          <Link className={styles.link2} to={"/about-candy"}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoBlock;
