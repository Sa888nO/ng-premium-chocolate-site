import React from "react";

import AccordionItem from "@components/AccordionItem";
import Title from "@components/Title";

import styles from "./DelivaryAndPaymentPage.module.scss";

const DelivaryAndPaymentPage = () => {
  return (
    <div className={styles.content}>
      <Title title="Доставка" />
      <div className={styles["accordion-block"]}>
        <AccordionItem
          title="Самовывоз"
          content="г. Электросталь, ул. Мира, д.22В. Бесплатно. По предварительному согласованию времени вашего визита."
        />
        <AccordionItem
          title="Доставка по г. Электросталь и МО"
          content="г. Электросталь, ул. Мира, д.22В. Бесплатно. По предварительному согласованию времени вашего визита."
        />
        <AccordionItem
          title="Доставка по России"
          content="Осуществляется транспортной компанией СДЭК до адреса или до пункта выдачи в вашем городе."
        />
      </div>
      <Title title="Способы оплаты" />
      <ul className={styles["payment-block"]}>
        <li>Наличными при самовывозе</li>
        <li>
          Оплата с банковской карты (при самовывозе или предоплата при доставке)
        </li>
      </ul>
      <div className={styles["special-info"]}>
        Заказы день в день принимаются только из наличия.
      </div>
    </div>
  );
};

export default DelivaryAndPaymentPage;
