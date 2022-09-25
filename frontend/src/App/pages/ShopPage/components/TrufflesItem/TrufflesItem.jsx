import React, { useState } from "react";

import styles from "./TrufflesItem.module.scss";

const TrufflesItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordion}>
      <div className="accordion-item">
        <div
          className={styles["accordion-title"]}
          onClick={() => setIsActive(!isActive)}
        >
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className={styles["accordion-content"]}>{content}</div>
        )}
      </div>
    </div>
  );
};

export default TrufflesItem;
