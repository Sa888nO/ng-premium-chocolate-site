import { useState } from "react";

import SocialLinksBlock from "@components/SocialLinksBlock";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header>
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
      <nav className={classNames(styles.header, { [styles.a]: !isOpen })}>
        <div className={classNames(styles.block_title)}>
          <div>
            <SocialLinksBlock type="header" />
          </div>
          <h1>
            <Link
              to={"/"}
              className={classNames({
                [styles.active]: location.pathname === "/",
              })}
            >
              <img src="/Logo.png" alt="1" />
            </Link>
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
            to={"/about-candy"}
            className={classNames({
              [styles.active]: location.pathname === "/about-candy",
            })}
          >
            О конфетах
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
          <SocialLinksBlock type="header" />
          <span>hello@ng.com</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
