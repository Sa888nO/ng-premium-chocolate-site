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
          <div className={styles.icons}>
            <SocialLinksBlock type="header" />
          </div>
          <h1>
            <Link
              to={"/"}
              className={classNames({
                [styles.active]: location.pathname === "/",
              })}
            >
              <div className={styles["svg-title-block"]}>
                <svg
                  className={styles.svg}
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="113.000000pt"
                  height="73.000000pt"
                  viewBox="0 0 113.000000 73.000000"
                  preserveAspectRatio="xMidYMid meet"
                  fill="black"
                >
                  <g transform="translate(0.000000,73.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M0 365 l0 -365 565 0 565 0 0 365 0 365 -565 0 -565 0 0 -365z m570
10 c0 -192 -4 -345 -9 -345 -5 0 -42 39 -82 87 -41 48 -128 148 -194 222 -66
75 -140 160 -165 189 l-45 52 -5 -283 -5 -282 -22 -3 -23 -3 0 350 c0 193 2
351 3 351 2 0 57 -62 123 -137 65 -76 144 -165 174 -198 30 -34 84 -96 120
-138 35 -42 68 -77 72 -77 5 0 8 126 8 280 l0 280 25 0 25 0 0 -345z m320 316
c57 -22 150 -84 150 -101 0 -5 -9 -14 -20 -20 -16 -8 -27 -4 -64 24 -82 62
-181 84 -293 63 -41 -7 -43 -6 -43 17 0 21 7 26 43 35 60 14 163 6 227 -18z
m208 -384 c-16 -198 -182 -318 -395 -288 -74 11 -83 16 -83 43 0 17 4 19 28
14 15 -4 57 -9 93 -13 152 -13 279 74 304 210 l7 37 -95 0 c-52 0 -102 3 -111
6 -16 6 -22 35 -9 47 3 4 65 7 136 7 l130 0 -5 -63z"
                    />
                  </g>
                </svg>
                <svg width="220" height="45" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <title>Layer 1</title>
                    <text
                      font-style="normal"
                      stroke="#000"
                      transform="matrix(1.186334791807362,0,0,1,-45.50123826252503,0) "
                      font-weight="bold"
                      text-anchor="start"
                      font-family="Roboto, sans-serif"
                      font-size="20"
                      y="29"
                      x="42.084257"
                      stroke-width="0"
                      fill="#fedb37"
                    >
                      premium chocolate
                    </text>
                  </g>
                </svg>
              </div>
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
