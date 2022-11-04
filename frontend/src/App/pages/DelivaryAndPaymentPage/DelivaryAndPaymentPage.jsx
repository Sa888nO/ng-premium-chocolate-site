import React from "react";

import AccordionItem from "@components/AccordionItem";
import Title from "@components/Title";
import classNames from "classnames";

import styles from "./DelivaryAndPaymentPage.module.scss";

const DelivaryAndPaymentPage = () => {
  return (
    <div className={classNames("page-container", styles.content)}>
      <Title title="Доставка" />
      <div className={styles["accordion-block"]}>
        <AccordionItem
          title="Самовывоз"
          content={
            <React.Fragment>
              <div className={styles["delivery-block"]}>
                <p>
                  г. Электросталь, ул. Мира, д.22В. Бесплатно. По
                  предварительному согласованию времени вашего визита.
                </p>
                <p>
                  г. Москва, ул. Верхние поля, 32, к.1. По предварительному
                  согласованию времени вашего визита.
                </p>
              </div>
            </React.Fragment>
          }
        />
        <AccordionItem
          title="Доставка по Электростали, Москве и МО"
          content="Осуществляется  службой Яндекс Такси (сервис - доставка). Стоимость: по тарифу сервиса на момент оформления доставки."
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
