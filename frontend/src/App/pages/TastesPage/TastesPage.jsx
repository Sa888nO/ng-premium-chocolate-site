import { useState, useEffect } from "react";

import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import ShopPageItem from "../ShopPage/ShopPageItem";
import ShopItems from "./../../../store/ShopItems/ShopItems";
import BodyCandy from "./components/BodyCandy";
import Truffles from "./components/Truffles";
import styles from "./TastesPage.module.scss";

const price = {
  number9: "900",
  number12: "1200",
  number16: "1600",
  number24: "2400",
  number30: "3000",
};

const TastesPage = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let currentItem = ShopItems.getItems[id - 1];
  return (
    <div className={classNames(styles.content)}>
      <img className={styles["img"]} src={currentItem.image} alt="candy" />
      <div className={styles["core-block"]}>
        <div className={styles["core-block__title"]}>{currentItem.title}</div>
        <div className={styles["price-block"]}>Количество:</div>
      </div>
    </div>
  );
};
export default observer(TastesPage);
