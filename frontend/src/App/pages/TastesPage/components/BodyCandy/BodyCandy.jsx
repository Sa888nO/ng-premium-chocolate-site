import CandyFlavors from "@store/CandyFlavors";
import { observer } from "mobx-react-lite";

import { BodyCandyItem } from "../index";
import styles from "./BodyCandy.module.scss";

const BodyCandy = () => {
  return (
    <div className={styles.content}>
      {CandyFlavors.getFlavors.map((candy, key) => (
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
export default observer(BodyCandy);
