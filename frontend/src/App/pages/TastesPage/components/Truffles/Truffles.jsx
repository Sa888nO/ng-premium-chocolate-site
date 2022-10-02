import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import TruffleFlavors from "@store/TruffleFlavors";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import styles from "./Truffles.module.scss";

const price = {
  first: 1500,
  second: 3000,
};

const Truffles = () => {
  const [currentPrice, setPrice] = useState(price.first);
  return (
    <div className={styles.content}>
      <div className={styles.img}></div>
      <div>
        {TruffleFlavors.getFlavors.map((candy, key) => (
          <Accordion className={styles.font} key={key}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="warning" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.font2}>{candy.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.font3}>{candy.info}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <div className={styles["button-block"]}>
          Коробочка
          <button
            onClick={() => setPrice(price.first)}
            className={classNames(styles["button"], {
              [styles["button_active"]]: currentPrice === price.first,
            })}
          >
            5 шт
          </button>
          <button
            onClick={() => setPrice(price.second)}
            className={classNames(styles["button"], {
              [styles["button_active"]]: currentPrice === price.second,
            })}
          >
            16 шт
          </button>
          <div className={styles["price"]}>Цена: {currentPrice} р.</div>
        </div>
      </div>
    </div>
  );
};
export default observer(Truffles);
