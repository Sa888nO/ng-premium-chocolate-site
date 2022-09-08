import classNames from "classnames";

import SocialLinksBlock from "./components/SocialLinksBlock";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.header_line)}>
        <SocialLinksBlock />
        <span>Monomo</span>
        <span>hello@ng.com</span>
      </div>
    </div>
  );
};

export default Header;
