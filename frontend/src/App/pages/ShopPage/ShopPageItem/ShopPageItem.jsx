import { useState } from "react";

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

const ShopPageItem = ({ id, title, image, type = true, typeSize = false }) => {
  const [candyNumber, setCandyNumber] = useState(9);
  return (
    <div className={classNames(styles.card, { [styles.cpec]: typeSize })}>
      <img className={styles.img} src={image} alt="candy" />
      <div
        className={classNames(styles["info-block"], {
          [styles["info-block-cpec"]]: typeSize,
        })}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles["price-block"]}>
          <div className={styles["switch-block"]}>
            <button
              onClick={() => setCandyNumber(9)}
              className={classNames(styles["button-switch"], {
                [styles["button-switch_active"]]: candyNumber === 9,
              })}
            >
              9 шт
            </button>
            <button
              onClick={() => setCandyNumber(12)}
              className={classNames(styles["button-switch"], {
                [styles["button-switch_active"]]: candyNumber === 12,
              })}
            >
              12 шт
            </button>
            <button
              onClick={() => setCandyNumber(16)}
              className={classNames(styles["button-switch"], {
                [styles["button-switch_active"]]: candyNumber === 16,
              })}
            >
              16 шт
            </button>
            <button
              onClick={() => setCandyNumber(24)}
              className={classNames(styles["button-switch"], {
                [styles["button-switch_active"]]: candyNumber === 24,
              })}
            >
              24 шт
            </button>
            <button
              onClick={() => setCandyNumber(30)}
              className={classNames(styles["button-switch"], {
                [styles["button-switch_active"]]: candyNumber === 30,
              })}
            >
              30 шт
            </button>
          </div>
          <div className={styles.price}>
            Цена: {price[`number${candyNumber}`]} р.
          </div>
        </div>
        {type ? (
          <Link
            onClick={() => {
              CurrentCandy.setCurrentCandy(id);
            }}
            to={"/tastes"}
            className={styles.button}
          >
            Выбрать вкус
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default observer(ShopPageItem);
