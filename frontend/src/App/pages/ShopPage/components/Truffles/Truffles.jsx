import TrufflesItem from "../TrufflesItem";
import styles from "./Truffles.module.scss";

const Truffles = () => {
  return (
    <div className={styles.content}>
      <div className={styles.img}></div>
      <TrufflesItem
        title={"Марцепан"}
        content={
          "молочный шоколад, какао-масло,  пюре клубники, ликер «Baileys Strawberries & Cream», «Петмол» 33% , масло сливочное «Экомилк», сироп глюкозный, инвертный сироп"
        }
      />
    </div>
  );
};
export default Truffles;
