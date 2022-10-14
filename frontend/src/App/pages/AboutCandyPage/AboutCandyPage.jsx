import AccordionItem from "@components/AccordionItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import classNames from "classnames";

import styles from "./AboutCandyPage.module.scss";
import picture from "./bg.jpg";
import choco1 from "./choco1.jpg";
import choco2 from "./choco2.jpg";
import choco3 from "./choco3.jpg";

const AboutCandyPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Шоколад</div>
      <div className={styles["choko-block"]}>
        <div className={styles["text-block"]}>
          <div className={styles.text}>
            В изготовлении конфет используется качественный и признанный
            известными шоколатье по всему миру бельгийский шоколад фирмы
            CALLEBAUT
          </div>
          <div className={styles.text}>
            В наших конфетах используются только лучшие ингредиенты, CALLEBAUT
            создает Finest Belgian Choсolate в самом сердце Бельгии на
            протяжении 100 лет.
          </div>
          <div className={styles.text}>
            Из поколения в поколение шоколад CALLEBAUT создается с любовью и
            преданностью своему делу.
          </div>
        </div>
        <img className={styles.img} src={picture} alt="background" />
      </div>
      <div className={styles["info-block"]}>
        <AccordionItem
          title="Белый шоколад"
          content={
            <div className={styles["accordion-content"]}>
              сахар, масло какао, сухое цельное молоко, эмульгатор – соевый
              лецитин, натуральный ароматизатор – ваниль, содержание
              какао-продуктов мин. 32%
              <img className={styles.img} src={choco1} alt="background" />
            </div>
          }
        />
        <AccordionItem
          title="Молочный шоколад"
          content={
            <div className={styles["accordion-content"]}>
              сахар, масло какао, сухое цельное молоко, какао тертое, эмульгатор
              – соевый лецитин, натуральный ароматизатор – ваниль, содержание
              какао-продуктов мин. 33,6%
              <img className={styles.img} src={choco2} alt="background" />
            </div>
          }
        />
        <AccordionItem
          title="Темный шоколад"
          content={
            <div className={styles["accordion-content"]}>
              какао тертое, сахар, масло какао, эмульгатор – соевый лецитин,
              натуральный ароматизатор – ваниль, содержание какао-продуктов мин.
              54,5%
              <img className={styles.img} src={choco3} alt="background" />
            </div>
          }
        />
      </div>
      <div className={classNames(styles.title, styles.mt)}>Состав</div>
      <div className={styles["text-info-ing"]}>
        Шоколадные изделия в зависимости от их вида имеют в своем составе
        следующие ингредиенты
      </div>
      <ul className={styles.push}>
        <li>бельгийский шоколад марки Callebaut</li>
        <li>французский шоколад марки Valrhona</li>
        <li>натуральные сливки</li>
        <li>орехи активированные, сублимированные ягоды и фрукты</li>
        <li>ягодное или фруктовое пюре</li>
        <li>натуральный кофе, травы, мед, специи</li>
      </ul>
    </div>
  );
};

export default AboutCandyPage;
