import ShopItems from "@store/ShopItems/ShopItems";
import { observer } from "mobx-react-lite";

import styles from "./ShopPage.module.scss";
import ShopPageItem from "./ShopPageItem";

const ShopPage = () => {
  return (
    <div className={styles.content}>
      {ShopItems.getItems.map((item, key) => (
        <div
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(item);
          }}
        >
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
