import classNames from "classnames";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles["logo-block"])}>
          <div className={classNames(styles["logo-block_img"])}></div>
          <div className={classNames(styles["logo-block_text-block"])}>
            <div className={classNames(styles["logo-block_main-text"])}>
              Шоколад ручной работы NG - это нежная и трогательная история про
              заботу, внимание, добрые отношения, любовь и дружбу, способная
              помочь выразить ваши чувства к родным и близким людям.
            </div>
            <div
              className={classNames(
                styles["logo-block_main-text"],
                styles["logo-block_sub-text"]
              )}
            >
              Шоколад ручной работы NG - это нежная и трогательная история про
              заботу, внимание, добрые отношения, любовь и дружбу, способная
              помочь выразить ваши чувства к родным и близким людям.
            </div>
            <div className={classNames(styles["logo-block_main-text"])}>
              Шоколад ручной работы NG - это нежная и трогательная история про
              заботу, внимание, добрые отношения, любовь и дружбу, способная
              помочь выразить ваши чувства к родным и близким людям.
            </div>
            <div
              className={classNames(
                styles["logo-block_main-text"],
                styles["logo-block_sub-text"]
              )}
            >
              Шоколад ручной работы NG - это нежная и трогательная история про
              заботу, внимание, добрые отношения, любовь и дружбу, способная
              помочь выразить ваши чувства к родным и близким людям.
            </div>
            <div className={classNames(styles["logo-block_main-text"])}>
              Шоколад ручной работы NG - это нежная и трогательная история про
              заботу, внимание, добрые отношения, любовь и дружбу, способная
              помочь выразить ваши чувства к родным и близким людям.{" "}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default MainPage;
