import React, { useState } from "react";

import classNames from "classnames";

import styles from "./DropDownList.module.scss";

const DropDownList = ({ options, update, typeCount = false }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentValue, setValue] = useState(options[0].title);
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
        {currentValue}
      </button>
      <div
        className={classNames(styles.options, {
          [styles["options-count"]]: typeCount,
        })}
      >
        {isOpen &&
          options.map((child, key) => (
            <div className={styles["black-wrap"]} key={key}>
              <div
                onClick={() => {
                  setValue(child.title);

                  update(child.title);
                  setOpen(false);
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

export default DropDownList;
