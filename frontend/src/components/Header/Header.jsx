import { useState } from "react";

import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import SocialLinksBlock from "./components/SocialLinksBlock";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
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
          <Link
            to={"/shop"}
            className={classNames({
              [styles.active]: location.pathname === "/shop",
            })}
          >
            Каталог
          </Link>
          <Link
            to={"/corporate-orders"}
            className={classNames({
              [styles.active]: location.pathname === "/corporate-orders",
            })}
          >
            Корпоративные заказы
          </Link>
          <Link
            to={"/delivery-and-payment"}
            className={classNames({
              [styles.active]: location.pathname === "/delivery-and-payment",
            })}
          >
            Доставка и оплата
          </Link>
          <Link
            to={"/about-author"}
            className={classNames({
              [styles.active]: location.pathname === "/about-author",
            })}
          >
            Об авторе
          </Link>
          <Link
            to={"/composition-and-storage"}
            className={classNames({
              [styles.active]: location.pathname === "/composition-and-storage",
            })}
          >
            Хранение
          </Link>
          <Link
            to={"/contacts"}
            className={classNames({
              [styles.active]: location.pathname === "/contacts",
            })}
          >
            Контакты
          </Link>
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
