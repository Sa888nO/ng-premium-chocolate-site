import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import styles from "./Truffles.module.scss";

const Truffles = () => {
  return (
    <div className={styles.content}>
      <div className={styles.img}></div>
      <div>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>
              Темный шоколад/апельсин
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              темный шоколад, шоколад со вкусом апельсина, какао-масло, сливки
              натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>
              Трюфель классический в обсыпке какао
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              темный шоколад, шоколад со вкусом апельсина, какао-масло, сливки
              натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>
              Трюфель «Клубника в молочном шоколаде с ликером «Baileys
              Strawberries & Cream»
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              молочный шоколад, какао-масло, пюре клубники, ликер «Baileys
              Strawberries & Cream», «Петмол» 33% , масло сливочное «Экомилк»,
              сироп глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Медовый аромат</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              Белый шоколад, какао-масло, цветы липы, мед натуральный липовый,
              сливки натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>
              Темный шоколад с клубникой
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              темный шоколад, клубника сублимированная, какао-масло, сливки
              натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>
              Фисташка с Амаретто
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              Белый шоколад, фисташковая паста, Амаретто, какао-масло, сливки
              натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Нежная мята</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              молочный шоколад, темный шоколад, какао-масло, мята, паста мятная,
              сливки натуральные «Петмол» 33% , масло сливочное «Экомилк», сироп
              глюкозный, инвертный сироп
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default Truffles;
