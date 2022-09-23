import { BodyCandyItem } from "../index";
import styles from "./BodyCandy.module.scss";

const BodyCandy = () => {
  return (
    <div className={styles.content}>
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
      <BodyCandyItem />
    </div>
  );
};
export default BodyCandy;
