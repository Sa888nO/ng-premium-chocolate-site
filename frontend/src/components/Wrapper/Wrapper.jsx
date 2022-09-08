import classNames from "classnames";

import styles from "./Wrapper.module.scss";

const Wrapper = ({ children }) => {
  return <div className={classNames(styles.wrapper)}>{children}</div>;
};

export default Wrapper;
