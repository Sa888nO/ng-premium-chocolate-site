import classNames from "classnames";

import background from "./bg.jpg";
import styles from "./CorporateOrders.module.scss";

const CorporateOrders = () => {
  return (
    <div className={classNames(styles.content)}>
      <div className={styles.title}>Корпоративным клиентам</div>
      <div className={styles.block}>
        <div className={styles["text-block"]}>
          <div className={styles["text-block_text-item1"]}>
            Создание эксклюзивных коллекций конфет для любого события в вашей
            компании. Брендирование упаковки под фирменные цвета и логотип.
          </div>
          <div className={styles["text-block_text-item2"]}>
            Различный формат подарков для вручения: от небольших комплиментов
            (подарочные коробки по 4 конфеты) до больших подарков (подарочные
            коробки по 40 конфет).
          </div>
          <div className={styles["text-block_text-item3"]}>
            Срок исполнения заказа: от 2 недель.
          </div>
        </div>

        <img src={background} alt="bg" className={styles.img} />
        <div className={styles["text-block_text-item33"]}>
          Срок исполнения заказа: от 2 недель.
        </div>
      </div>
    </div>
  );
};
export default CorporateOrders;
