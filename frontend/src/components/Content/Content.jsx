import classNames from "classnames";

import styles from "./Content.module.scss";

const Content = ({ children }) => {
  return <div className={classNames(styles.content)}>{children}</div>;
};

export default Content;
