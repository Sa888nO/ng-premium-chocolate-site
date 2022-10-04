import styles from "./BodyCandyItem.module.scss";

const BodyCandyItem = ({ Title, subTitle, image, info, price }) => {
  return (
    <div className={styles["candy-card"]}>
      <div className={styles["candy-card_img"]}>
        <img src={image} alt="candy" width={200} />
      </div>
      <div className={styles["candy-card_title"]}>{Title}</div>
      <div className={styles["candy-card_sub-title"]}>{subTitle}</div>
      <div className={styles["candy-card_info"]}>Состав: {info}</div>
    </div>
  );
};
export default BodyCandyItem;
