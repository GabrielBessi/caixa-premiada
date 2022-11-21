import styles from "./Present.module.css";

const Present = () => {
  return (
    <div className={styles.presente}>
      <div className={styles.tampa}></div>
      <div className={styles.corpo}></div>
      <div className={styles.lacoCorpo}></div>
      <div className={styles.lacoTampa}></div>
    </div>
  );
};

export default Present;
