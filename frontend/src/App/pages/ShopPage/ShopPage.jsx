import classNames from "classnames";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from "./ShopPage.module.scss";
import ShopPageItem from "./ShopPageItem";

const ShopPage = () => {
    const shopItems = useSelector((state) => state.shopItems.items);
    // eslint-disable-next-line no-console
    console.log(shopItems);
    const location = useLocation();
    let items = [];
    if (location.pathname === "/shop/2") {
        items = shopItems.filter((item) => !item.truffle);
    } else if (location.pathname === "/shop/3") {
        items = shopItems.filter((item) => item.truffle);
    } else items = shopItems;
    return (
        <div className={classNames("page-container", styles.content)}>
            {items.map((item, key) => (
                <ShopPageItem
                    title={item.title}
                    id={item.id}
                    image={item.image}
                    key={key}
                />
            ))}
        </div>
    );
};
export default ShopPage;
