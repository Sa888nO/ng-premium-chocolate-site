import styles from "./DevPage.module.scss";

const DevPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}> Страница находится в разработке</div>
      <div className={styles.smile}>
        В ближайшее время она будет доступна :)
      </div>
    </div>
  );
};

export default DevPage;
