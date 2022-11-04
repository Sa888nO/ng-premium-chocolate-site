import classNames from "classnames";

import Catalog from "./components/Catalog";
import LogoBlock from "./components/LogoBlock";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classNames("page-container", styles.content)}>
      <LogoBlock />
      <Catalog />
    </div>
  );
};
export default MainPage;
