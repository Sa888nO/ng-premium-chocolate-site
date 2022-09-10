import classNames from "classnames";
import { Link } from "react-router-dom";

import SocialLinksBlock from "./components/SocialLinksBlock";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <input type="checkbox" id="checkbox" onClick={() => {}}>
        <div className={classNames(styles.header)}>
          <div className={classNames(styles.block_title)}>
            <div>
              <SocialLinksBlock />
            </div>
            <h1>
              <Link to={"/"}>Monomo</Link>
            </h1>
            <span>hello@ng.com</span>
          </div>
          <div className={classNames(styles.block_link)}>
            <Link to={"/shop"}>Каталог</Link>
            <Link to={"/corporate-orders"}>Корпоративные заказы</Link>
            <Link to={"/delivery-and-payment"}>Доставка и оплата</Link>
            <Link to={"/about-author"}>Об авторе</Link>
            <Link to={"/composition-and-storage"}>Хранение</Link>
            <Link to={"/contacts"}>Контакты</Link>
          </div>
          <div className={classNames(styles["hidden-block"])}>
            <SocialLinksBlock />
            <span>hello@ng.com</span>
          </div>
        </div>
      </input>
    </div>
  );
};

export default Header;
