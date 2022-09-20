import { useState } from "react";

import classNames from "classnames";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const [whatOfCandy, setWhatOfCandy] = useState(true);
  return (
    <div className={classNames(styles.content)}>
      <button
        className={classNames(styles.button, {
          [styles["button_active"]]: !whatOfCandy,
        })}
        class={styles.button}
        onClick={() => setWhatOfCandy(!whatOfCandy)}
      >
        <span className={classNames({ [styles.active]: whatOfCandy })}>
          Коробочные конфеты
        </span>
        <span className={classNames({ [styles.active]: !whatOfCandy })}>
          Трюфели
        </span>
      </button>
    </div>
  );
};
export default ShopPage;
