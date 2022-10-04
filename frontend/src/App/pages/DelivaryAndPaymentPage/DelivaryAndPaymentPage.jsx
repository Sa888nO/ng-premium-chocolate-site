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
              Доставка по Москве и МО
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              осуществляется службой Яндекс Такси (сервис - доставка).
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
              в соответствии тарифом доставки выбранной логистической компании.
              Средняя стоимость доставки небольшого заказа: с сентября по июнь
              (стандартная доставка) - 500-800 руб. С июня по сентябрь (с
              соблюдением терморежима) - 3000-6000.Средний срок доставки: 1-5
              дней.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.font}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="warning" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.font2}>Срок изготовления</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.font3}>
              составляет от 3 дней в зависимости от загруженности на момент
              приема заказа сложности выполнения заказа и количества конфет в
              заказе, а также от наличия конкретных ингредиентов.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["cpec-info"]}>
        Заказы день в день принимаются только из наличия.
      </div>
    </div>
  );
};

export default DelivaryAndPaymentPage;
