import { useState, useEffect } from "react";

import CurrentCandy from "@store/CurrentCandy";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import ShopPageItem from "../ShopPage/ShopPageItem";
import BodyCandy from "./components/BodyCandy";
import Truffles from "./components/Truffles";
import { Data } from "./data";
import styles from "./TastesPage.module.scss";

const TastesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let currentDataItem = Data[CurrentCandy.currentCandy - 1];
  return (
    <div className={classNames(styles.content)}>
      {CurrentCandy.currentCandy === -1 ? (
        <></>
      ) : (
        <div className={styles.cur}>
          <ShopPageItem
            id={currentDataItem.id}
            title={currentDataItem.title}
            image={currentDataItem.image}
            type={false}
            typeSize={true}
          />
        </div>
      )}
      <div className={styles.tastes}>Вкусы</div>
      {/* <button
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
      </button> */}
      {CurrentCandy.currentCandy != 3 ? <BodyCandy /> : <Truffles />}
    </div>
  );
};
export default observer(TastesPage);
