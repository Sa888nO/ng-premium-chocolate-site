import React, { useState } from "react";

import classNames from "classnames";

import styles from "./DropDownListTastes.module.scss";

const DropDownListTastes = ({
  options,
  update,
  typeCount = false,
  currentTastes,
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    <div
      className={classNames(styles.wrap, {
        [styles["wrap-count"]]: typeCount,
      })}
    >
      <button
        className={classNames(styles["multi-down"], {
          [styles["multi-down-count"]]: typeCount,
        })}
        onClick={handleOpen}
      >
        Добавить вкус +
      </button>
      <div
        className={classNames(styles.options, {
          [styles["options-count"]]: typeCount,
        })}
      >
        {isOpen &&
          options.map((child, index) => (
            <div
              className={classNames(styles["black-wrap"], {
                [styles.active]: currentTastes.includes(child.title),
              })}
            >
              <div
                onClick={() => {
                  update(child.title);
                }}
                className={classNames(styles.option, {
                  [styles["option-count"]]: typeCount,
                })}
              >
                {child.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDownListTastes;
