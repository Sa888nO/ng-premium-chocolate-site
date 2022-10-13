import React from "react";

import AccordionItem from "@components/AccordionItem";

import styles from "./DelivaryAndPaymentPage.module.scss";

const DelivaryAndPaymentPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles["title-info"]}>
        Вы можете заказать конфеты в понравившемся вам дизайне или выбрать
        конфеты из наличия.
      </div>
      <div className={styles["info-block"]}>
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
        <AccordionItem
          title="Доставка по Москве"
          content={
            <React.Fragment>
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
            </React.Fragment>
          }
        />
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
