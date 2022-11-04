import { useState } from "react";

import ShopItems from "@store/ShopItems/ShopItems";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useLocation, useParams } from "react-router-dom";

import styles from "./ShopPage.module.scss";
import ShopPageItem from "./ShopPageItem";

const ShopPage = () => {
  const location = useLocation();
  // const [sortType, changeSortType] = useState(id);
  let items = [];
  if (location.pathname === "/shop/2") {
    items = ShopItems.getItems.filter((item) => !item.truffle);
  } else if (location.pathname === "/shop/3") {
    items = ShopItems.getItems.filter((item) => item.truffle);
  } else items = ShopItems.getItems;
  return (
    <div className={classNames("page-container", styles.content)}>
      {items.map((item, key) => (
        <div>
          <ShopPageItem
            title={item.title}
            id={item.id}
            image={item.image}
            key={key}
          />
        </div>
      ))}
    </div>
  );
};
export default observer(ShopPage);
