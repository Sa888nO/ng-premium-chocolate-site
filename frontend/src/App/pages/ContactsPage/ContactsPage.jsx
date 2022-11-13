import Title from "@components/Title";
import classNames from "classnames";

import styles from "./ContactsPage.module.scss";
import whatsUp from "./WUP.png";

const ContactsPage = () => {
  return (
    <div className={classNames("page-container", styles.content)}>
      <Title title={"Контакты"} />
      <div className={styles["information-block"]}>
        <p>Контактный телефон: + 7 (929) 508-39-36</p>
        <p>
          Email: <a href="mailto:NG_choco@mail.ru">NG_choco@mail.ru</a>
        </p>
        <img src={whatsUp} alt="dfg" width={350} />
      </div>
    </div>
  );
};
export default ContactsPage;
