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
import DropDownList from "./DropDownList";
import DropDownListTastes from "./DropDownListTastes";
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
  let currentItem = ShopItems.getItems.filter((item) => item.id === +id)[0];

  let data = currentItem.truffle
    ? TruffleFlavors.getFlavors
    : CandyFlavors.getFlavors;

  const [countCandy, setCountCandy] = useState(9);
  const [idCurrentTaste, setIdCurrentTaste] = useState(data[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classNames(styles.content)}>
      <div className={styles["main-content"]}>
        <div>
          <img className={styles["img"]} src={currentItem.image} alt="candy" />
        </div>
        <div className={styles["core-block"]}>
          <div className={styles["core-block__title"]}>{currentItem.title}</div>
          <div className={styles["price-block"]}>
            <div className={styles["price-block__select"]}>
              Количество:
              <DropDownList
                options={[
                  { title: 9 },
                  { title: 12 },
                  { title: 16 },
                  { title: 24 },
                  { title: 30 },
                ]}
                update={(value) => setCountCandy(value)}
                typeCount={true}
              />
            </div>
            <div className={styles["price-block__select"]}>
              Вкус:
              <DropDownListTastes
                options={data}
                update={(value) => {
                  setIdCurrentTaste(
                    data.filter((item) => {
                      return item.title === value;
                    })[0].id - 1
                  );
                }}
              />
            </div>
            <div className={styles["price-block__price"]}>
              Цена: <span>{price[`number${countCandy}`]} р</span>
            </div>
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
