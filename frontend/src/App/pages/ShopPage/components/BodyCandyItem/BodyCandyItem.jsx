import { useState } from "react";

import classNames from "classnames";

import styles from "./BodyCandyItem.module.scss";

const BodyCandyItem = ({ Title, subTitle, image, info, price }) => {
  const [currentPrice, setPrice] = useState(price.first);

  return (
    <div className={styles["candy-card"]}>
      <div className={styles["candy-card_img"]}>
        <img src={image} alt="candy" width={200} />
      </div>
      <div className={styles["candy-card_title"]}>{Title}</div>
      <div className={styles["candy-card_sub-title"]}>{subTitle}</div>
      <div className={styles["candy-card_info"]}>Состав: {info}</div>
      <div className={styles["candy-card_button-block"]}>
        Коробочка
        <button
          onClick={() => setPrice(price.first)}
          className={classNames(styles["candy-card_button"], {
            [styles["candy-card_button_active"]]: currentPrice === price.first,
          })}
        >
          5 шт
        </button>
        <button
          onClick={() => setPrice(price.second)}
          className={classNames(styles["candy-card_button"], {
            [styles["candy-card_button_active"]]: currentPrice === price.second,
          })}
        >
          16 шт
        </button>
      </div>
      <div className={styles["candy-card_price"]}>
        Цена: {currentPrice} руб.
      </div>
    </div>
  );
};
export default BodyCandyItem;
