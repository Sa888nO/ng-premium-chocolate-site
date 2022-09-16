import SocialLinksBlock from "@components/SocialLinksBlock";
import classNames from "classnames";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles["footer_content"])}>
        <SocialLinksBlock type="footer" />
      </div>
    </div>
  );
};

export default Footer;
