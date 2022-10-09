import { useState, useEffect } from "react";

import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import ShopPageItem from "../ShopPage/ShopPageItem";
import ShopItems from "./../../../store/ShopItems/ShopItems";
import BodyCandy from "./components/BodyCandy";
import Truffles from "./components/Truffles";
import styles from "./TastesPage.module.scss";

const TastesPage = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let currentDataItem = ShopItems.getItems[id - 1];
  return (
    <div className={classNames(styles.content)}>
      <div className={styles.cur}>
        <ShopPageItem
          id={currentDataItem.id}
          title={currentDataItem.title}
          image={currentDataItem.image}
        />
      </div>
    </div>
  );
};
export default observer(TastesPage);
