import CurrentCandy from "@store/CurrentCandy";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import styles from "./ShopPageItem.module.scss";

const price = {
  number9: "900",
  number12: "1200",
  number16: "1600",
  number24: "2400",
  number30: "3000",
};

const ShopPageItem = ({ id, title, image }) => {
  return (
    <div className={classNames(styles.card)}>
      <img className={styles["card__img"]} src={image} alt="candy" />
      <div className={classNames(styles["card__info-block"])}>
        <div className={styles["card__title"]}>{title}</div>
        <Link
          onClick={() => {
            CurrentCandy.setCurrentCandy(id);
          }}
          to={"/tastes"}
          className={styles["card__button"]}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default observer(ShopPageItem);
