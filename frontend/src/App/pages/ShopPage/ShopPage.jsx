import { useState } from "react";

import classNames from "classnames";

import BodyCandy from "./components/BodyCandy";
import Truffles from "./components/Truffles";
import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const [whatOfCandy, setWhatOfCandy] = useState(true);
  return (
    <div className={classNames(styles.content)}>
      <button
        className={classNames(styles.button, {
          [styles["button_active"]]: !whatOfCandy,
        })}
        onClick={() => setWhatOfCandy(!whatOfCandy)}
      >
        <span className={classNames({ [styles.active]: whatOfCandy })}>
          Корпусные конфеты
        </span>
        <span className={classNames({ [styles.active]: !whatOfCandy })}>
          Трюфели
        </span>
      </button>
      {whatOfCandy ? <BodyCandy /> : <Truffles />}
    </div>
  );
};
export default ShopPage;
