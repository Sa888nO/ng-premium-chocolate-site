import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ title, content }) => {
  return (
    <Accordion className={styles["accordion"]}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="warning" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={styles["title"]}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={styles["content"]}>
          <React.Fragment>{content}</React.Fragment>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
