/* eslint-disable no-console */
import { useState } from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import SocialLinksBlock from "./components/SocialLinksBlock";
import styles from "./Header.module.scss";

const Header = (activPage) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={classNames(styles["button-block"])}>
        <button
          className={classNames(
            styles["c-hamburger"],
            styles["c-hamburger--htx"],
            { [styles["is-active"]]: isOpen }
          )}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span></span>
        </button>
      </div>
      <div className={classNames(styles.header, { [styles.a]: !isOpen })}>
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
    </div>
  );
};

export default Header;
