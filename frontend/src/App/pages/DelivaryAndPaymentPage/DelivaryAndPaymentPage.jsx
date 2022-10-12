import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import styles from "./DelivaryAndPaymentPage.module.scss";

const DelivaryAndPaymentPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles["title-info"]}>
        Вы можете заказать конфеты в понравившемся вам дизайне или выбрать
        конфеты из наличия.
      </div>
      <div className={styles["info-block"]}>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Самовывоз</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              г. Электросталь, ул. Мира, д.22В. Бесплатно. По предварительному
              согласованию времени вашего визита.
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
              Доставка по г. Электросталь и МО
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              Осуществляется службой Яндекс Такси (сервис - доставка).
              Стоимость: по тарифу сервиса на момент оформления доставки.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Доставка по России</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              Осуществляется транспортной компанией СДЭК до адреса или до пункта
              выдачи в вашем городе.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Доставка по Москве</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              <ul>
                <li>
                  Доставка продукции по Москве, осуществляется по средам с 19.00
                  до 22.00 бесплатно.
                </li>
                <li>
                  В остальные дни по индивидуальному согласованию. Стоимость
                  доставки 500 руб
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.title}>СПОСОБЫ ОПЛАТЫ</div>
      <ul className={styles.ul}>
        <li>Наличными при самовывозе</li>
        <li>
          Оплата с банковской карты (при самовывозе или предоплата при доставке)
        </li>
      </ul>
      <div className={styles["cpec-info"]}>
        Заказы день в день принимаются только из наличия.
      </div>
    </div>
  );
};

export default DelivaryAndPaymentPage;
