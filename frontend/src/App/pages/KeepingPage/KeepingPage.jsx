import Title from "@components/Title";
import classNames from "classnames";

import styles from "./KeepingPage.module.scss";

const KeepingPage = () => {
    return (
        <div className={classNames("page-container", styles.content)}>
            <Title title="Хранение Конфет" />
            <div className={styles["info-block"]}>
                <p>
                    Хранить конфеты необходимо при температуре 16-18 °C
                    относительной влажности воздуха не более 60% и не подвергать
                    воздействию прямого солнечного света
                </p>
                <p>
                    При соблюдении условий хранения, срок годности составляет от
                    45 до 60 дней. Да, это недолго, Но поверьте вы их съедите
                    гораздо быстрее
                </p>
                <p>
                    Для того, чтобы максимально насладиться вкусом наших
                    шоколадных изделий следуйте совету:
                    <span>
                        «достаньте их из холодильника за 5-7 минут до
                        употребления и затем наслаждайтесь неповторимым вкусом
                        настоящего шоколада»
                    </span>
                </p>
            </div>
        </div>
    );
};

export default KeepingPage;
