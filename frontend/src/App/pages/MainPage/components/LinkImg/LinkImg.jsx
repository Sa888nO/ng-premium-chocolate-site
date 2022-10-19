import { Link } from "react-router-dom";

import { ArrowSVG } from "./ArrowSVG";
import styles from "./LinkImg.module.scss";

const LinkImg = ({ image, title, link }) => {
  return (
    <Link className={styles["block"]} to={link}>
      <div className={styles.img}>
        <img src={image} alt="" />

        <div className={styles.card}>
          <div className={styles["catalog_text"]}>{title}</div>
          <ArrowSVG />
        </div>
      </div>
    </Link>
  );
};

export default LinkImg;
