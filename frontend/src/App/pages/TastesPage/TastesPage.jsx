import React, { useState, useEffect } from "react";

import CandyFlavors from "@store/CandyFlavors";
import TruffleFlavors from "@store/TruffleFlavors";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import ShopPageItem from "../ShopPage/ShopPageItem";
import ShopItems from "./../../../store/ShopItems/ShopItems";
import { BodyCandyItem } from "./components";
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
  let currentItem = ShopItems.getItems[id - 1];
  let data = currentItem.truffle
    ? TruffleFlavors.getFlavors
    : CandyFlavors.getFlavors;
  const [countCandy, setCountCandy] = useState(9);
  const [idCurrentTaste, setIdCurrentTaste] = useState(data[0].id);
  // eslint-disable-next-line no-console
  console.log(idCurrentTaste);
  // eslint-disable-next-line no-console
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classNames(styles.content)}>
      <img className={styles["img"]} src={currentItem.image} alt="candy" />
      <div className={styles["core-block"]}>
        <div className={styles["core-block__title"]}>{currentItem.title}</div>
        <div className={styles["price-block"]}>
          <div className={styles["price-block__select"]}>
            Количество:
            <select
              className={styles.select1}
              onChange={(e) => setCountCandy(e.target.value)}
            >
              <option>9</option>
              <option>12</option>
              <option>16</option>
              <option>24</option>
              <option>30</option>
            </select>
          </div>
          <div className={styles["price-block__select"]}>
            Вкус:
            <select
              onChange={(e) => {
                data.forEach((item) => {
                  if (item.title == e.target.value) {
                    setIdCurrentTaste(item.id);
                  }
                });
              }}
            >
              {data.map((candy) => (
                <option key={candy.id}>{candy.title}</option>
              ))}
            </select>
          </div>
          <div className={styles["price-block__price"]}>
            Цена: <span>{price[`number${countCandy}`]}</span>
          </div>
        </div>
      </div>
      <BodyCandyItem
        Title={data[idCurrentTaste].title}
        subTitle={data[idCurrentTaste].subTitle}
        image={data[idCurrentTaste].image}
        info={data[idCurrentTaste].info}
        price={data[idCurrentTaste].price}
      />
    </div>
  );
};
export default observer(TastesPage);
