import { BodyCandyItem } from "../index";
import styles from "./BodyCandy.module.scss";
import { CANDYS } from "./candys";

const BodyCandy = () => {
  return (
    <div className={styles.content}>
      {CANDYS.map((candy, key) => (
        <BodyCandyItem
          key={key}
          image={candy.image}
          Title={candy.title}
          subTitle={candy.subTitle}
          info={candy.info}
          price={candy.price}
        />
      ))}
    </div>
  );
};
export default BodyCandy;
