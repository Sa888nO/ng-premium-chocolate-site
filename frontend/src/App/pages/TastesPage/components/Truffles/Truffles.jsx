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
      </div>
    </div>
  );
};
export default observer(Truffles);
